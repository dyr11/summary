var mongoClient=require('mongodb').MongoClient;
var assert=require('assert');
var url="mongodb://localhost:27017/mydb";
mongoClient.connect(url,function(error,db){
	assert.equal(error,null);
	console.log("connection success!");
	var collection=db.collection('dishes');
	collection.insertOne({a:"AAA",b:"BBB"},function(error,result){
		assert.equal(error,null);
		console.log("insert success!");
		console.log(result.ops);
		collection.find({}).toArray(function(error,result){
			assert.equal(error,null);
			console.log("find success!");
			console.log(result);
			db.dropCollection('dishes',function(error,result){
				assert.equal(error,null);
				console.log("drop success!");
				db.close();
			})
		})
	})
})