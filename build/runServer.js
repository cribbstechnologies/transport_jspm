var liveServer = require("live-server");
 
var params = {
	port: 8081, // Set the server port. Defaults to 8080.  
	root: "./public", // Set root directory that's being server. Defaults to cwd. 
	open: false, // When false, it won't load your browser by default. 
};
liveServer.start(params);