function addPost() {

    let create_post_text = document.getElementById('create-text');
    let img = document.querySelector('.uploaded-img')

    if ((!(create_post_text.value == '')) || (!(img == null))) {
        let post_description = create_post_text.value;
        create_post_text.value = '';

        let main = document.querySelector('main');
        let div_create_post = document.querySelector('.create-post');

        // div - post
        let post = document.createElement('div');
        post.classList.add('post');

        // img - perfil
        let img_perfil = document.createElement('img');
        img_perfil.classList.add('perfil-image');
        img_perfil.src = 'image/profile-photos/pp-Jacquin.jpg';
        post.appendChild(img_perfil);

        // p - username
        let username = document.createElement('p');
        username.classList.add('username');
        let name = document.createTextNode('Erick Jacquin');
        username.appendChild(name);
        post.appendChild(username);

        // div - option
        let option = document.createElement('div');
        option.classList.add('option-icon');

        // img - option [...]
        let img_option = document.createElement('img');
        img_option.classList.add('drop-icon');
        img_option.src = 'image/icons/more-options.png';
        option.appendChild(img_option);

        // div - drop-items
        let drop_items = document.createElement('div');
        drop_items.classList.add('drop-items');

        // a - items
        items = ['Apagar', 'Editar', 'Salvar'];

        for (var i = 0; i < items.length; i++) {
            let item = document.createElement('a');
            item.setAttribute('href', '#');
            item.setAttribute('onclick', 'optionsChoice(this)');
            let current_item = document.createTextNode(items[i]);
            item.appendChild(current_item);
            drop_items.appendChild(item);
        }

        option.appendChild(drop_items);
        post.appendChild(option);

        // p - description
        let description = document.createElement('p');
        description.classList.add('post-description');
        let description_text = document.createTextNode(post_description);
        description.appendChild(description_text);
        post.appendChild(description);

        // img - post image
        if (!(img == null)) {
            let img_container = document.createElement('div');
            img_container.classList.add('post-image-container');
            let img_post = document.createElement('img');
            img_post.src = img.src;
            document.querySelector('.uploaded-img').remove();
            img_container.appendChild(img_post);
            post.appendChild(img_container);
        }

        // svg - like button
        let like = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        like.classList.add('like-button');
        like.setAttribute('viewbox', '0 0 24 24');
        like.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        like.setAttribute('style', 'fill: rgb(24, 25, 26);');
        like.setAttribute('onclick', 'iLike(this)');

        let path_svg_1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path_svg_1.setAttribute('d', 'M0 0h24v24H0V0z');
        path_svg_1.setAttribute('fill', 'none');
        like.appendChild(path_svg_1);

        let path_svg_2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path_svg_2.setAttribute('d', 'M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z');
        like.appendChild(path_svg_2);
        post.appendChild(like);

        // p - likes quantity
        let likes_qnt = document.createElement('p');
        likes_qnt.classList.add('likes');
        let likes_qnt_text = document.createTextNode('0');
        likes_qnt.appendChild(likes_qnt_text);
        post.appendChild(likes_qnt);

        // // svg - comp button
        // let comp = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        // comp.classList.add('comp-button');
        // comp.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        // comp.setAttribute('viewbox', '0 0 20 20');

        // path_svg_1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        // path_svg_1.setAttribute('fill', '#000000');
        // path_svg_1.setAttribute('d', "M16.198,10.896c-0.252,0-0.455,0.203-0.455,0.455v2.396c0,0.626-0.511,1.137-1.138,1.137H5.117c-0.627,0-1.138-0.511-1.138-1.137V7.852c0-0.626,0.511-1.137,1.138-1.137h5.315c0.252,0,0.456-0.203,0.456-0.455c0-0.251-0.204-0.455-0.456-0.455H5.117c-1.129,0-2.049,0.918-2.049,2.047v5.894c0,1.129,0.92,2.048,2.049,2.048h9.488c1.129,0,2.048-0.919,2.048-2.048v-2.396C16.653,11.099,16.45,10.896,16.198,10.896z");
        // comp.appendChild(path_svg_1);

        // path_svg_2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        // path_svg_2.setAttribute('fill', '#000000');
        // path_svg_2.setAttribute('d', "M14.053,4.279c-0.207-0.135-0.492-0.079-0.63,0.133c-0.137,0.211-0.077,0.493,0.134,0.63l1.65,1.073c-4.115,0.62-5.705,4.891-5.774,5.082c-0.084,0.236,0.038,0.495,0.274,0.581c0.052,0.019,0.103,0.027,0.154,0.027c0.186,0,0.361-0.115,0.429-0.301c0.014-0.042,1.538-4.023,5.238-4.482l-1.172,1.799c-0.137,0.21-0.077,0.492,0.134,0.629c0.076,0.05,0.163,0.074,0.248,0.074c0.148,0,0.294-0.073,0.382-0.207l1.738-2.671c0.066-0.101,0.09-0.224,0.064-0.343c-0.025-0.118-0.096-0.221-0.197-0.287L14.053,4.279z");
        // comp.appendChild(path_svg_2);
        // post.appendChild(comp);

        // div - comment-area
        let comment_area = document.createElement('div');
        comment_area.classList.add('comment-area');
        post.appendChild(comment_area);

        // textarea - comment
        let comment = document.createElement('textarea');
        comment.classList.add('comment');
        post.appendChild(comment);

        // button - enviar comentario
        let botao_comment = document.createElement('button');
        botao_comment.classList.add('butao');
        botao_comment.setAttribute('onclick', 'addComment(this)');
        let botao_comment_text = document.createTextNode('Comentar');
        botao_comment.appendChild(botao_comment_text);
        post.appendChild(botao_comment);

        main.prepend(div_create_post, post);
        document.querySelector('.area-emojis').remove()
    } else {
        alert('Preencha o campo de texto para poder postar.')
    }
}