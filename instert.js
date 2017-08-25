const mongo = require('mongodb').MongoClient
	, url = 'mongodb://localhost:27017/learnyoumongo';


let doc = {
		firstName: process.argv[2],
		lastName: process.argv[3],
	};

mongo.connect(url, function(err, db) {
	if(err) throw err;

	db.collection('docs')
		.insert( doc, function(err, data){
			if (err) throw err;

			console.log(JSON.stringify(doc))
		})
	db.close();
})