function emoticon() {
    emojis = ['0x1F600', '0x1F602', '0x1F605','0x1F60D', '0x1F60F', '0x1F621', '0x1F62D', '0x1F911','0x1F609','0x1F618','0x1F92F', '0x1F92E','0x1F92C','0x1F921','0x1F920'];
    
    if(document.querySelector('#emojis-area') == null){
        let area_emojis = document.createElement('div');
        area_emojis.id = 'emojis-area';
        document.querySelector('#create-post').appendChild(area_emojis);
    
        for (var i = 0; i < emojis.length; i++){
            var emoji = document.createElement('button');
            emoji.setAttribute('onclick', 'addEmoji(this)');
            emoji.classList.add('emojis');
            var current_emoji = document.createTextNode(String.fromCodePoint(emojis[i]));
            emoji.appendChild(current_emoji);
            area_emojis.appendChild(emoji);
        }   
    } else {
        document.querySelector('#emojis-area').remove();
     }
}

function addEmoji(emoji){
    console.log("POKdwpodkwpokdwd");
    var current_text = document.querySelector('#create-description');
    current_text.value = current_text.value + emoji.innerText;
}
    