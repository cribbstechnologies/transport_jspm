var fs = require('fs-extra');

try {
	fs.copySync('app', 'public', function(path) {
		return path.indexOf('.html') > -1;
	});
    fs.copySync('css', 'public/css');
} catch (err) {
	console.error("Oh no, there was an error: " + err.message);
}