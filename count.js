const mongo = require('mongodb').MongoClient
	, url = 'mongodb://localhost:27017/learnyoumongo'
	, age = process.argv[2];


mongo.connect(url, function(err, db) {
	db.collection('parrots')
		.count({age: {$gt: +age}},
			function(err, count) {
				if(err) return err;
				console.log(count)
				db.close();
			})

})