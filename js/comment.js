
function addComment(buttonComment) {
    
    const postNode = buttonComment.parentNode;
    const commentInputNode = postNode.querySelector('.comment-input');

    if (commentInputNode.value == '') {
        alert('Preencha o campo de comentário para poder comentar.')

    } else {
        const commentAreaNode = postNode.querySelector('.comment-area');
        
        // Comment input value
        let commentText = commentInputNode.value;

        const commentNode = document.createElement("div");
        commentNode.classList.add("comments");

        // Profile image
        const profileImageNode = document.createElement('img');
        profileImageNode.classList.add('perfil-image-comment');
        profileImageNode.src = 'image/profile-photos/pp-Jacquin.jpg';
        commentNode.appendChild(profileImageNode);

        // Username
        const usernameNode = document.createElement('p');
        usernameNode.classList.add('username-comment');
        const nameTextNode = document.createTextNode('Erick Jacquin');
        usernameNode.appendChild(nameTextNode);
        commentNode.appendChild(usernameNode);

        // Comment
        const commentPostNode = document.createElement('p');
        commentPostNode.classList.add('comment-post');
        const commentPostTextNode = document.createTextNode(commentText);
        commentPostNode.appendChild(commentPostTextNode);
        commentNode.appendChild(commentPostNode);

        commentAreaNode.appendChild(commentNode);

        commentInputNode.value = '';

    }
}