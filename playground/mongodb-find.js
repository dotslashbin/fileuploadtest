const { MongoClient, ObjectID } = require('mongodb')


MongoClient.connect('mongodb://nodeapp:pass1234@localhost:27017/appdb', { useNewUrlParser: true }, (err, client) => {
	if(err) {
		console.log(err)
		return console.log("Unable to connect to db")
	}

	var db = client.db('appdb')

	db.collection('Todos').find({ _id: new ObjectID('5c09191048bd2181db1451e9') }).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2))
	})
})