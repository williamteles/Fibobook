function optionsChoice(optionElement, idPost) {

    post = optionElement.parentNode.parentNode.parentNode

    switch (optionElement.innerText) {
        case "Apagar":
            post.remove();
            break;
        case "Editar":
            text = prompt("Informe a nova descrição para seu post:");
            textLocation = post.querySelector('.post-description')
            textLocation.innerText = text;
            break;
        case "Salvar":
            alert("Post Salvo");
            break;
    }
}