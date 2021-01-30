const Hapi = require("@hapi/hapi");
const posts = require("../data/posts");

let cont = 0;

const init = async () => {
	const server = Hapi.server({
		port: 8000,
		host: "localhost"
	});
	
	server.route({
		method: "GET",
		path: "/api/posts",
		handler: function(req, res) {
			return posts;
		},
		options: {
    		cors: true
		}
	});

	await server.start();
};

init();


