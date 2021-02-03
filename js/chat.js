function hideChat() {
    const friendsList = document.querySelector("#friends-list");
    friendsList.style.display = friendsList.style.display != "none" ? "none" : "block";
}

function generateChat(friendName) {
    let chatTemplate = `
    <div id="chat-${friendName}" class="chat">
        <div id="chat-header" 
            <p id="friend-name">${friendName.replaceAll("-", " ")}<p>
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