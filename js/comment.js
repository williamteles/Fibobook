
function addComment(){

    let comment_area = document.querySelector('.comment-area')

    let create_comment_text = document.getElementById('comment')
    let comment_text = create_comment_text.value
    create_comment_text.value = ''


    let perfil_image = document.createElement('img')
    perfil_image.classList.add('perfil-image-comment')
    perfil_image.src = 'image/profile-photos/pp-Jacquin.jpg'
    comment_area.appendChild(perfil_image)

    let username = document.createElement('p')
    username.classList.add('username-comment')
    let name = document.createTextNode('Erick Jacquin')
    username.appendChild(name)
    comment_area.appendChild(username)

    let comment_post = document.createElement('p')
    comment_post.classList.add('comment-post')
    let comment_post_text = document.createTextNode(comment_text)

    comment_post.appendChild(comment_post_text)

    comment_area.setAttribute('style', 'height: 50px')
    comment_area.append(comment_post)        

}

// foto - nome : kjfdkjfkdjfkjd