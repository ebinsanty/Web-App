var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
app.use(bodyParser.urlencoded({extended:true}));//usually copy pste line 
mongoose.connect("mongodb://localhost/yelp_camp",{useNewUrlParser:true});

//SCHEMA SETUP
var animalSchema= new mongoose.Schema({
	name:String,
	image:String,
	des:String
});

var Animal=mongoose.model("Animal",animalSchema);

/*Animal.create({
	name:"tiger",
	image:"https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
	des:"Tiger is the national animal of india,Tiger is from a cat family.Tigers are fast  "	
	
},function(err,animal){
	if(err)
		console.log(err);
	else
		console.log(animal);//thi animal is the call back of inserted string
});*/

app.set("view engine","ejs");//required for render (no need of .ejs)
//var animals = [
		//{name:"lion",image:"https://images.unsplash.com/photo-1543682704-15adeb008ac4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=341&q=80"},
		//{name:"tiger",image:"https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
		//{name:"elephant",image:"https://images.unsplash.com/photo-1536798227072-f571dcefdef1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1057&q=80"},
		//{name:"leopard",image:"https://images.unsplash.com/photo-1517825738774-7de9363ef735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=998&q=80"}
	//];

app.get("/",function(req,res){
	res.render("landing");
});

app.get("/animals",function(req,res){
	Animal.find({},function(err,animaldb){
		if(err){
			console.log(err);
		}
		else{
			res.render("animals",{ani:animaldb});//animals will be the data passing,ani will be the name given
		}

	});
	//res.render("animals",{ani:animals});//animals will be the data passing,ani will be the name given
//note for the landing page in for loop
//the name inside function should be the object
});

app.post("/animals",function(req,res){ // this will get the data from new where action is specified as animals
	//res.send("you hit it");
	var name=req.body.name;
	var image=req.body.url;
	var des=req.body.desc
	var newAnimals={name:name,image:image,des:des};
	//animals.push(newAnimals);
	Animal.create(newAnimals,function(err,newAnimals){
		if(err)
			console.log(err);
		else
		{
			res.redirect("/animals");
		}
	});
	
});

app.get("/animals/new",function(req,res){
	res.render("new");

});

app.get("/animals/:id",function(req,res){
    Animal.findById(req.params.id,function(err,foundanimal){
    	if(err)
    		console.log(err)
    	else
    		res.render("show",{animal:foundanimal});


    });
	
	

});

app.listen(3000,function(){
	console.log("Yelp has started");
});

//<div class="col-md-3 col-small-6"></div>