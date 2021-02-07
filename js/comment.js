
function addComment(buttonComment) {

    const postNode = buttonComment.parentNode;
    const commentInputNode = postNode.querySelector('.comment-input');

    if (commentInputNode.value == '') {
        alert('Preencha o campo de comentário para poder comentar.');

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

        // Delete
        const deleteCommentNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        deleteCommentNode.classList.add('delete-comment');
        deleteCommentNode.setAttribute('viewbox', '0 0 16 16');
        deleteCommentNode.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        deleteCommentNode.setAttribute('fill', 'currentColor');
        deleteCommentNode.setAttribute('style', 'width: 16px; height: 16px;');
        deleteCommentNode.setAttribute('onclick', 'deleteComment(this)');
        
        const SVGPath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        SVGPath1.setAttribute('d','M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z');
        SVGPath1.setAttribute('fill', 'none');

        const SVGPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        SVGPath2.setAttribute('d', 'M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z');
        SVGPath2.setAttribute('fill-rule', 'evenodd');
        
        deleteCommentNode.appendChild(SVGPath2);
        commentNode.appendChild(deleteCommentNode);

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

function deleteComment(comment) {
    let deleteCommentText = confirm('Tem certeza?');
    if (deleteCommentText){
        comment.parentNode.remove();
    }
}   