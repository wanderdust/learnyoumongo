
let mongo = require('mongodb').MongoCLient
mongo.connect(url, function(err, db) {
	// db gives acces to the database.
	console.log(db)
})