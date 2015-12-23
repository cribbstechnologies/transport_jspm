var fs = require('fs-extra');

try {
	fs.copySync('app', 'public');
} catch (err) {
	console.error("Oh no, there was an error: " + err.message);
}