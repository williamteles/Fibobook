function hideChat() {
    const friendsList = document.querySelector("#friends-list");
    friendsList.style.display = friendsList.style.display != "none" ? "none" : "block";
}

function generateChat(friendName) {
    let chatTemplate = `
    <div id="chat-${friendName}" class="chat">
        <div id="chat-header" 
            <p id="friend-name">${friendName.replaceAll("-", " ")}<p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id="closeBtn" onclick="closeChat(this)" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg>
        </div>
        
        <div id="messages-section"></div>
        <textarea id="input-message" onkeyup="sendMessage(event);"></textarea>
    </div>`;

    return chatTemplate;
}

function openChat(e) {
    const friendName = e.textContent.replaceAll(" ", "-");
    const chat = document.querySelector(`#chat-${friendName}`);

    if(chat) {
        chat.remove();
    }

    const container = document.querySelector(".right");
    const newChat = generateChat(friendName);

    container.innerHTML = newChat + container.innerHTML;
} 

function sendMessage(e) {
    var keyCode = e.keyCode || e.which;

    var text =  document.querySelector("#input-message").value;
    if (keyCode === 13) {
        if (text == "" || $.trim(text) == "") {
            e.preventDefault();
            return false;
        } else {
            setUserResponse(text);
            return false;
        }
    }
}


function closeChat(e){
    e.parentNode.parentNode.parentNode.remove()
}
//==================================== Set user response =====================================
function setUserResponse(message) {
    const messagesSection = document.querySelector("#messages-section");

    let userResponse = `
        <div class="user-response">
            <img class="userAvatar" src="image/profile-photos/pp-Jacquin.jpg"/>
            <p class="userMsg">${message}</p>
        </div>`;

    messagesSection.innerHTML += userResponse;
    document.querySelector("#input-message").value = "";

    scrollToBottomOfResults();
}

//=========== Scroll to the bottom of the chats after new message has been added to chat ======
function scrollToBottomOfResults() {
    var terminalResultsDiv = document.getElementById("messages-section");
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
}