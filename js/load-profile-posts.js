import generatePostNode from "./generate-post-node.js"
import loadPosts from "./load-posts.js"


async function loadProfilePosts() {
    const postersNode = document.querySelector("#posters");
    let posts = await loadPosts("https://fibobook-posts-api.herokuapp.com/api/posts_profile");

    for(let post of posts) {
        let user = post.user;
        let description = post.description;
        let likeNumber = post.likeNumber;
        let imageUrl = post.imageUrl;

        let postNode = generatePostNode(user, description, likeNumber, imageUrl);
        postersNode.appendChild(postNode);
    }
}

document.addEventListener("DOMContentLoaded", loadProfilePosts);