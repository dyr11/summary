var Teacher =require("./teacher");
var Student =require("./student");
function add(teacher,students){
	console.log("class add");
	Teacher.add(teacher);
	students.forEach(function(data,index){
		Student.add(data);
	});
}

exports.add=add;