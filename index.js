const contact = require('./build/contact.js').handler;

contact({}, {}, function(err, data) {
	if (err) console.log(err)
	else console.log(data)
 });
