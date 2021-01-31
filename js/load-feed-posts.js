import generatePostNode from "./generate-post-node.js"
import loadPosts from "./load-posts.js"


async function loadProfilePosts() {
    const feedNode = document.querySelector("#feed");
    let posts = await loadPosts("http://localhost:8000/api/posts_feed");

    for(let post of posts) {
        let user = post.user;
        let description = post.description;
        let likeNumber = post.likeNumber;
        let imageUrl = post.imageUrl;

        let postNode = generatePostNode(user, description, likeNumber, imageUrl);
        feedNode.appendChild(postNode);
    }
}

document.addEventListener("DOMContentLoaded", loadProfilePosts);