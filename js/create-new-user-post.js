import generatePostNode from "./generate-post-node.js"
import User from "./user.js";


function createNewUserPost() {  
    const feedNode = document.querySelector("#feed");
    const postDescriptionNode = document.getElementById("create-description");
    const postImageNode = document.querySelector("#uploaded-img");
    const emojiAreaNode = document.querySelector("#emojis-area");

    let postDescription = postDescriptionNode.value;
    let postImageSrc = postImageNode ? postImageNode.getAttribute("src") : null;

    if(postDescription == "" && postImageSrc == null) {
        alert("Preencha o campo de texto para poder postar.");

    } else {
        let likeNumber = 0;

        let username = "Erick Jacquin";
        let userProfileImageURL = "image/profile-photos/pp-Jacquin.jpg";
        let user = new User(username, userProfileImageURL);

        const postNode = generatePostNode(user, postDescription, likeNumber, postImageSrc);
        feedNode.prepend(postNode);

        // Reset the new posts creation section
        postDescriptionNode.value = "";

        if(postImageNode) {
            postImageNode.remove();
        }
        if(emojiAreaNode) {
            emojiAreaNode.remove();
        }
    }
}

const postButton = document.querySelector("#post-button");
postButton.addEventListener("click", createNewUserPost);    