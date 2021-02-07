function optionsChoice(optionElement) {
    let post = optionElement.parentNode.parentNode.parentNode;

    switch (optionElement.innerText) {
        case "Apagar":
            post.remove();
            break;
        case "Editar":
            text = prompt("Informe a nova descrição para seu post:");
            console.log(text);
            if (text == null) {
                return;
            } else if (text == '') {
                alert('Você precisa preenher o campo para poder editar seu post.');
            } else {
                textLocation = post.querySelector('.post-description');
                textLocation.innerText = text;
            }
            break;
        case "Salvar":
            alert("Post Salvo");
            break;
    }
}