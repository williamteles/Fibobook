async function loadPosts(url) {
    const feedNode = document.querySelector("#feed");

    return fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return data;
        })  
};    

export default loadPosts
