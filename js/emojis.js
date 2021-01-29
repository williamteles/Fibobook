function emoticon() {
    emojis = ['0x1F600', '0x1F602', '0x1F605','0x1F60D', '0x1F60F', '0x1F621', '0x1F62D', '0x1F911']
    
    if(document.querySelector('.area-emojis') == null){
        let area_emojis = document.createElement('div')
        area_emojis.setAttribute('class', 'area-emojis')
        area_emojis.setAttribute('style', 'grid-row: 3; grid-column: 1/-1; border: 2px groove #9a9a9a; display: flex; border-radius: 5px')
        document.querySelector('.create-post').appendChild(area_emojis)
    
        for (var i = 0; i < emojis.length; i++){
            var emoji = document.createElement('button')
            emoji.setAttribute('onclick', 'addEmoji(this)')
            emoji.setAttribute('style', 'border: none; outline:none !important')
            var current_emoji = document.createTextNode(String.fromCodePoint(emojis[i]))
            emoji.appendChild(current_emoji)
            area_emojis.appendChild(emoji)
        }
    
    } else {
        document.querySelector('.area-emojis').remove()
     }

    }


function addEmoji(emoji){
    var current_text = document.querySelector('#create-text')
    current_text.value = current_text.value + emoji.innerText
}
    