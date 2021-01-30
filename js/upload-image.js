const file = document.querySelector('#upload-file');
const button_svg = document.querySelector('#media-icon')

button_svg.addEventListener('click', function (e) {
    if (file) {
        file.click()
    }
    e.preventDefault()
}, false)

file.addEventListener('change', handleFiles, false)

function handleFiles() {
    let img = document.createElement('img')
    img.src = window.webkitURL.createObjectURL(this.files[0])
    img.height = 200
    img.id = "uploaded-img";
    img.onload = function () {
        URL.revokeObjectURL(this.src)
    }
    document.querySelector('#create-post').appendChild(img)
}