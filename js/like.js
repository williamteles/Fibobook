let flag = 0;
		let qutLikes = parseInt(document.getElementById('likesCount').innerText);
		console.log(qutLikes);
		

		function iLike() {
			if (flag === 0){
				document.getElementById('likes').style.fill = '#17bf63';
				qutLikes = qutLikes + 1;
				document.getElementById('likesCount').innerHTML = qutLikes;
				flag = 1;
			} else {
				document.getElementById('likes').style.fill = '#18191a';
				qutLikes = qutLikes - 1;
				document.getElementById('likesCount').innerHTML = qutLikes;
				flag = 0;
			}

		}