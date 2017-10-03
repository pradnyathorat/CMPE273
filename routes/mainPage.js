var ejs = require("ejs");

exports.index = function(req,res) {

	ejs.renderFile('./views/index.ejs',function(err, result) {
	   if (!err) {
	            res.end(result);
	   }
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}

exports.findSolution = function(req,res){

};



