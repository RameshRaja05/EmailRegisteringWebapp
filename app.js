var express=require('express');
var bodyParser=require("body-parser");
var app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use(express.static(__dirname + "/public"));

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',     
  database : 'join_us'   
});

app.get("/", function(req, res){
 var q = 'SELECT COUNT(*) as count FROM users';
 connection.query(q, function (error, results) {
 var msg = (results[0].count);
 res.render('hello',{jack:msg});
 });
});

app.post('/register',function(req,res){
	var hyert={email: req.body.email};
	var t='insert into users set ?';
	connection.query(t,hyert,function(err,result){
		console.log(req.body);
		res.redirect("/");
			});
}
		);







app.listen(3000,function(){
	console.log('should use 3000 instead of 8080');
}
		  
		  );
