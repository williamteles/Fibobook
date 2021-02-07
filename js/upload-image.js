const file = document.querySelector('#upload-file');
const button_svg = document.querySelector('#media-icon');

button_svg.addEventListener('click', function (e) {
    if (file) {
        file.click();
    }
    e.preventDefault();
}, false)

file.addEventListener('change', handleFiles, false)

function handleFiles() {
    const imagePreviewNode = document.querySelector('#uploaded-img');
    const newImagePreviewNode = document.createElement('img');

    newImagePreviewNode.src = window.webkitURL.createObjectURL(this.files[0]);
    newImagePreviewNode.height = 200;
    newImagePreviewNode.id = "uploaded-img";
    newImagePreviewNode.onload = function () {
        URL.revokeObjectURL(this.src);
    }

    // Remove the old image preview
    if(imagePreviewNode) {
        imagePreviewNode.remove();
    }

    document.querySelector('#create-post').appendChild(newImagePreviewNode);
}