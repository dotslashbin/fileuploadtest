/**
 * Basic Example
 */
// const MongoClient = require('mongodb').MongoClient

/**
 * Object deconstruction example
 */
const { MongoClient, ObjectID } = require('mongodb')

/**
 * Create mongodb object id like mongodb
 */
var obj = new ObjectID(); 
console.log("GEERATED OBJECT ID :" + obj) // Regular object id

MongoClient.connect('mongodb://nodeapp:pass1234@localhost:27017/appdb', { useNewUrlParser: true }, (err, client) => {
	if(err) {
		console.log(err)
		return console.log("Unable to connect to db")
	}

	console.log("Connected to MongoDB")

	var db = client.db('appdb')

	db.collection('Todos').insertOne({ text: "deconstruct", completed: false}, (err, result) =>  {
		if(err) {
			return console.log(' Unable to add the data', err)
		} 
	})

	client.close(); 
})

