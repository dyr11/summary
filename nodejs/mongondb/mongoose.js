var mongoose =require('mongoose');
var assert = require('assert');
var Schema=mongoose.Schema;

var dishSchema=new Schema({
	name:{
		type:String,
		require:true,
		unique:true
	},
	desc:{
		type:String,
		require:true
	}
},{timestamps:true});

var dishes=mongoose.model('dish',dishSchema);

var url="mongodb://localhost:27017/mydb";
mongoose.connect(url);
var db=mongoose.connection;
db.on('error',function(){
	console.log("connection error!");
});
db.on('open',function(){
	console.log("connection success!");
	var newdish=dishes({name:"hello1",desc:"world!"});
	newdish.save(function(err){
		assert.equal(err,null);
		console.log("save success!");
		dishes.find({},function(err,result){
			if(err){
				throw err;
			}
			console.log("find success!");
			console.log(result);
			db.collection('dishes').drop(function(){
				db.close();
			})
		})
	})
})