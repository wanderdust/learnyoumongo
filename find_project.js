const mongo = require('mongodb').MongoClient
	, url = 'mongodb://localhost:27017/learnyoumongo'
	, age = +process.argv[2];

mongo.connect(url, function(err, db) {
	if (err) return err;

	db.collection('parrots')
		.find({age: {$gt: age}}, {_id: 0})
		.toArray(function(err, document) {
			if(err) return err;

			console.log(document)
		})
	db.close();
})