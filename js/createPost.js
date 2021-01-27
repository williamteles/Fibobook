let id_number = 1
function addPost() {

    let create_post_text = document.getElementById('create-text')
    let post_description = create_post_text.value
    create_post_text.value = ''

    let main = document.querySelector('main')
    let div_create_post = document.querySelector('.create-post')

    // div - post
    let post = document.createElement('div')
    post.classList.add('post')

    // img - perfil
    let img_perfil = document.createElement('img')
    img_perfil.classList.add('perfil-image')
    img_perfil.src = 'image/profile-photos/pp-Jacquin.jpg'
    post.appendChild(img_perfil)

    // p - username
    let username = document.createElement('p')
    username.classList.add('username')
    let name = document.createTextNode('Erick Jacquin')
    username.appendChild(name)
    post.appendChild(username)

    // div - option
    let option = document.createElement('div')
    option.classList.add('option-icon')

    // img - option [...]
    let img_option = document.createElement('img')
    img_option.classList.add('drop-icon')
    img_option.src = 'image/icons/more-options.png'
    option.appendChild(img_option)

    // div - drop-items
    let drop_items = document.createElement('div')
    drop_items.classList.add('drop-items')

    // a - items
    items = ['Apagar', 'Editar', 'Salvar']

    for (var i = 0; i < items.length; i++) {
        let item = document.createElement('a')
        item.setAttribute('href', '#')
        let current_item = document.createTextNode(items[i])
        item.appendChild(current_item)
        drop_items.appendChild(item)
    }

    option.appendChild(drop_items)
    post.appendChild(option)


    // p - description
    let description = document.createElement('p')
    description.classList.add('post-description')
    let description_text = document.createTextNode(post_description)
    description.appendChild(description_text)
    post.appendChild(description)

    /*
    // img - post image
    let img_post = document.createElement('img')
    img_post.classList.add('post-image')
    post.appendChild(img_post)
    */

    // svg - like button
    let like = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    like.classList.add('like-button')
    like.setAttribute('viewbox', '0 0 24 24')
    like.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    like.setAttribute('id', 'likes' + id_number)
    like.setAttribute('style', 'fill: rgb(24, 25, 26);')
    like.setAttribute('onclick', 'iLike(this)')

    let path_svg_1 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path_svg_1.setAttribute('d', 'M0 0h24v24H0V0z')
    path_svg_1.setAttribute('fill', 'none')
    like.appendChild(path_svg_1)

    let path_svg_2 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path_svg_2.setAttribute('d', 'M1 21h4V9H1				  v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-				   .5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z')
    like.appendChild(path_svg_2)
    post.appendChild(like)

    // p - likes quantity
    let likes_qnt = document.createElement('p')
    likes_qnt.classList.add('likes')
    likes_qnt.setAttribute('id', 'likesCount' + id_number)
    let likes_qnt_text = document.createTextNode('0')
    likes_qnt.appendChild(likes_qnt_text)
    post.appendChild(likes_qnt)

    // img - share
    let share_img = document.createElement('img')
    share_img.classList.add('comp-button')
    share_img.src = 'image/icons/comp-preto.png'
    post.appendChild(share_img)

    // div - comment-area
    let comment_area = document.createElement('div')
    comment_area.classList.add('comment-area')
    comment_area.setAttribute('id', 'comment-area' + id_number)
    post.appendChild(comment_area)

    // textarea - comment
    let comment = document.createElement('textarea')
    comment.classList.add('comment')
    comment.setAttribute('id', 'comment' + id_number)
    post.appendChild(comment)

    // button - enviar comentario
    let botao_comment = document.createElement('button')
    botao_comment.classList.add('butao')
    botao_comment.setAttribute('id', 'botao' + id_number)
    botao_comment.setAttribute('onclick', 'addComment(this)')
    let botao_comment_text = document.createTextNode('Enviar')
    botao_comment.appendChild(botao_comment_text)
    post.appendChild(botao_comment)

    main.prepend(div_create_post, post)
    id_number = id_number + 1

}