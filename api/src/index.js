const Hapi = require("@hapi/hapi");

const postsUpdateFeed = require("../data/posts_update_feed");
const postsProfile = require("../data/posts_profile");
const postsFeed = require("../data/posts_feed");


const init = async () => {
	const server = Hapi.server({
		port: 8000,
		host: "localhost"
	});
	
	server.route({
		method: "GET",
		path: "/api/posts_update_feed",
		handler: function(req, res) {
			return postsUpdateFeed;
		},
		options: {
    		cors: true
		}
	});

	server.route({
		method: "GET",
		path: "/api/posts_profile",
		handler: function(req, res) {
			return postsProfile;
		},
		options: {
			cors: true
		}
	});

	server.route({
		method: "GET",
		path: "/api/posts_feed",
		handler: function(req, res) {
			return postsFeed;
		},
		options: {
			cors: true
		}
	});

	await server.start();
};

init();


