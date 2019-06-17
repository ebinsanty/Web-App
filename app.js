var express=require("express");
var app=express();

app.set("view engine","ejs");//required for render (no need of .ejs)


app.get("/",function(req,res){
	res.render("landing");
});

app.get("/animals",function(req,res){
	var animals = [
		{name:"lion",image:"https://images.pexels.com/photos/1106452/pexels-photo-1106452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
		{name:"tiger",image:"https://images.pexels.com/photos/951007/pexels-photo-951007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
		{name:"elephant",image:"https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940"},
		{name:"leopard",image:"https://images.pexels.com/photos/235674/pexels-photo-235674.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
	]
	
	
	res.render("animals",{ani:animals});//com will be the data passing,ani will be the name given

});

app.listen(3000,function(){
	console.log("Yelp has started");
});