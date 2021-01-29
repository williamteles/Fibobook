function iLike(buttonLike) {

	let post = buttonLike.parentNode
	let like = post.querySelector('.likes')
	 
	let qutLikes = parseInt(like.innerText);

	if (buttonLike.style.fill == "rgb(24, 25, 26)") {
		buttonLike.style.fill = '#17bf63';
		qutLikes = qutLikes + 1;
		like.innerText = qutLikes;
	} else {
		buttonLike.style.fill = '#18191a';
		qutLikes = qutLikes - 1;
		like.innerText = qutLikes;
	}

}