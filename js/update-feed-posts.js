import generatePostNode from "./generate-post-node.js"


async function updateFeedPosts() {
    const feedNode = document.querySelector("#feed");
    let posts = await loadPosts();

    for(let post of posts) {
        let user = post.user;
        let description = post.description;
        let likeNumber = post.likeNumber;
        let imageUrl = post.imageUrl;

        let postNode = generatePostNode(user, description, likeNumber, imageUrl);
        feedNode.appendChild(postNode);
    }
}

function loadPosts() {
    const feedNode = document.querySelector("#feed");
    let posts = [];

    if ((window.innerHeight + window.scrollY) >= feedNode.offsetHeight) {
        posts = fetch("http://localhost:8000/api/posts")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                return data;
            })  
    };    
    return posts;
}

window.addEventListener("scroll", updateFeedPosts);