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
    img.setAttribute('style', 'grid-row: 3; grid-column: 3; border: 2px groove #9a9a9a')
    img.setAttribute('id', 'uploaded-img')
    img.onload = function () {
        URL.revokeObjectURL(this.src)
    }
    document.querySelector('#create-post').appendChild(img)
}