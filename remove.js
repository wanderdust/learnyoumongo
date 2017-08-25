const mongo = require('mongodb').MongoClient
	, url = `mongodb://localhost:27017/${process.argv[2]}`
	, collection = process.argv[3]
	, id = process.argv[4];

mongo.connect(url, function(err, db) {
	if(err) return err;

	db.collection(collection)
		.remove(
			{_id : {$eq: id}},
			function(err, data) {
				if(err) return err;
				db.close();
			})
})