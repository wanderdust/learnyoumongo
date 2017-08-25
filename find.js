let mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo' 


mongo.connect(url, function(err, db) {
	if(err) return err;

	db.collection('parrots')
		.find()
		.toArray(function(err, parrots) {
			if(err) return err;

			let older = [];

			for (let parrot in parrots) {
				if(parrots[parrot].age > 3) {
					older.push(parrots[parrot])
				}
			}
			return console.log(older);
		})
	db.close()
})