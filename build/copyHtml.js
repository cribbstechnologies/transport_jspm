var fs = require('fs-extra');

try {
	fs.copySync('app', 'public', function(path) {
		return path.indexOf('.html') > -1;
	});
} catch (err) {
	console.error("Oh no, there was an error: " + err.message);
}