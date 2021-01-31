import generatePostNode from "./generate-post-node.js"
import loadPosts from "./load-posts.js"


async function updateFeedPosts() {
    const feedNode = document.querySelector("#feed");

    if ((window.innerHeight + window.scrollY) >= feedNode.offsetHeight) {
        let posts = await loadPosts("http://localhost:8000/api/posts_update_feed");

        for(let post of posts) {
            let user = post.user;
            let description = post.description;
            let likeNumber = post.likeNumber;
            let imageUrl = post.imageUrl;

            let postNode = generatePostNode(user, description, likeNumber, imageUrl);
            feedNode.appendChild(postNode);
        }
    }
}

window.addEventListener("scroll", updateFeedPosts)