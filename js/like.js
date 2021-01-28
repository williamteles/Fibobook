function iLike(buttonLike) {

	let id = String(buttonLike.id).split("likes").pop();
	let qutLikes = parseInt(document.getElementById('likesCount' + id).innerText);

	if (document.getElementById('likes' + id).style.fill == "rgb(24, 25, 26)") {
		document.getElementById('likes' + id).style.fill = '#17bf63';
		qutLikes = qutLikes + 1;
		document.getElementById('likesCount' + id).innerText = qutLikes;
	} else {
		document.getElementById('likes' + id).style.fill = '#18191a';
		qutLikes = qutLikes - 1;
		document.getElementById('likesCount' + id).innerText = qutLikes;
	}

}