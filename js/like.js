let flag = 0;

function iLike(x) {
	let y = String(x.id).split("likes").pop()
	let qutLikes = parseInt(document.getElementById('likesCount' + y).innerText);
	if (flag === 0) {
		document.getElementById('likes' + y).style.fill = '#17bf63';
		qutLikes = qutLikes + 1;
		document.getElementById('likesCount' + y).innerText = qutLikes;
		flag = 1;
	} else {
		document.getElementById('likes' + y).style.fill = '#18191a';
		qutLikes = qutLikes - 1;
		document.getElementById('likesCount' + y).innerText = qutLikes;
		flag = 0;
	}

}