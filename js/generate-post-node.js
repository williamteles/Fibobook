 function generatePostNode(user, description, likeNumber, postImageSrc) {

    // Post 
    let postNode = document.createElement("div");
    postNode.classList.add("post");

    // Profile Image
    let userProfileImageNode = document.createElement("img");
    userProfileImageNode.classList.add("perfil-image");
    userProfileImageNode.src = user.profileImageUrl;
    postNode.append(userProfileImageNode);

    // Username
    let usernameNode = document.createElement("p");
    usernameNode.classList.add("username");
    let username = document.createTextNode(user.name);
    usernameNode.appendChild(username);
    postNode.appendChild(usernameNode);
    
    // Options
    let optionNode = document.createElement("div");
    optionNode.classList.add("option-icon");

    let optionImageNode = document.createElement("img");
    optionImageNode.classList.add("drop-icon");
    optionImageNode.src = "image/icons/more-options.png";
    optionNode.appendChild(optionImageNode);

    let dropItemsNode = document.createElement("div");
    dropItemsNode.classList.add("drop-items");

    let items = ["Apagar", "Editar", "Salvar"];

    for(let item of items) {
        let itemNode = document.createElement("a");           
        itemNode.href = "#";
        itemNode.setAttribute("onclick", "optionsChoice(this)");
        let itemTextNode = document.createTextNode(item);
        itemNode.appendChild(itemTextNode);
        dropItemsNode.appendChild(itemNode);
    }
    optionNode.appendChild(dropItemsNode);
    postNode.appendChild(optionNode);

    // Like 
    let likeNode = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    likeNode.classList.add("like-button");
    likeNode.setAttribute("viewbox", "0 0 24 24");
    likeNode.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    likeNode.setAttribute("style", "fill: rgb(24, 25, 26);");
    likeNode.setAttribute("onclick", "iLike(this)");

    let SVGPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    SVGPath1.setAttribute("d", "M0 0h24v24H0V0z");
    SVGPath1.setAttribute("fill", "none");
    
    let SVGPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    SVGPath2.setAttribute("d", "M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z");
    likeNode.appendChild(SVGPath2);
    postNode.appendChild(likeNode);

    let likeCounterNode = document.createElement("p");
    likeCounterNode.classList.add("likes");
    likeCounterNode.id = "likesCount";
    let likeNumberTextNode = document.createTextNode(likeNumber.toString());
    likeCounterNode.appendChild(likeNumberTextNode)
    postNode.appendChild(likeCounterNode);

    // Description
    let descriptionNode = document.createElement("p");
    descriptionNode.classList.add("post-description");
    let descriptionTextNode = document.createTextNode(description);
    descriptionNode.appendChild(descriptionTextNode);
    postNode.appendChild(descriptionNode);

    // Post image
    if (!(postImageSrc == null)) {
        let imageNodeContainer = document.createElement("div");
        imageNodeContainer.classList.add("post-image-container");
        let imageNode = document.createElement("img");
        imageNode.src = postImageSrc;
        imageNodeContainer.append(imageNode);
        postNode.appendChild(imageNodeContainer);
    }

    // Comment
    let commentNode = document.createElement("textarea");
    commentNode.classList.add("comment");
    commentNode.id = "comment";
    postNode.appendChild(commentNode);

    // Comments section
    let commentsAreaNode = document.createElement("div");
    commentsAreaNode.classList.add("comment-area");
    postNode.appendChild(commentsAreaNode);

    // Send comment button
    let commentButtonNode = document.createElement("button");
    commentButtonNode.classList.add("butao");
    commentButtonNode.setAttribute("onclick", "addComment()");
    let commentButtonTextNode = document.createTextNode("Enviar");
    commentButtonNode.appendChild(commentButtonTextNode);
    postNode.appendChild(commentButtonNode);

    return postNode;
}

export default generatePostNode