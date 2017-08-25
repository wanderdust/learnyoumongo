const mongo = require('mongodb').MongoClient
	, url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
	if(err) throw err;

	let collection = db.collection('prices');
	collection.aggregate([
		{$match: {size: process.argv[2]}},
		{$group: {
			_id: 'total_price',
			total: {$avg: '$price'}
		}}
	]).toArray(function(err, data) {
		if(err) return err;
		console.log(data[0].total.toFixed(2))
		db.close();
	})
})