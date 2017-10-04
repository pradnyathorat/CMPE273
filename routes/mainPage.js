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
	var operation = req.param("op");
	var input1 = req.param("input1");
	var input2 = req.param("input2");
	var result = req.param("result");

	if(input1=="" || input2==""){
		ejs.renderFile('./views/index.ejs', { invalid: 1 } , function(err, results) {
	        if (!err) {
	            res.end(results);
	        }
	        else {
	            res.end('An error occurred');
	            console.log(err);
	        }
	    });
	}
	else
		{
		if (operation == "add") {
				result=parseFloat(input1)+parseFloat(input2);
		}
		if (operation == "subtract") {
			result=parseFloat(input1)-parseFloat(input2);
		}
		if (operation == "multiply") {
			result=parseFloat(input1)*parseFloat(input2);
		}
		if (operation == "divide") {
			if(parseFloat(input2) && parseInt(input2)!=0)
			{
				result=parseFloat(input1)/parseFloat(input2);
			}
			else
			{
				ejs.renderFile('./views/index.ejs', { invalid: 2 } , function(err, results) {
			        if (!err) {
			            res.end(results);
			        }
			        else {
			            res.end('An error occurred');
			            console.log(err);
			        }
			    });
			}
		}
		if(operation=='clear'){
			ejs.renderFile('./views/index.ejs', function(err, results) {
		        if (!err) {
		            res.end(results);
		        }
		        else {
		            res.end('An error occurred');
		            console.log(err);
		        }
		    });
		}
		console.log("Result --> "+result);
		ejs.renderFile('./views/index.ejs', { result: result, input1 : input1, input2 : input2} , function(err, results) {
	        if (!err) {
	            res.end(results);
	        }
	        else {
	            res.end('An error occurred');
	            console.log(err);
	        }
	    });
		}
};
