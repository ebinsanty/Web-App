var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo",{useNewUrlParser:true});



var postSchema=new mongoose.Schema({
	title:String,
	content:String

});
var Post=mongoose.model("Post",postSchema);

var userSchema= new mongoose.Schema({
    email:String,
    name:String,
    posts:[postSchema]
});
var User= mongoose.model("User",userSchema);

/*
var newUser = new User({
	email:"anjaly.santy@gmail.com",
	name:"Anjaly Santy"
});

newUser.posts.push({
	title:"Bravest man Known",
	content:"Ebin Santy is the only bravest man i know"

})

newUser.save(function(err,user){
	if(err)
		console.log(err);
	else
		console.log(user);

});
*/

 /*var newPost =new Post({
 	title:"The Bravest man Known",
 	content:"Ebin Santy is the bravest man i know"

 });

 newPost.save(function(err,post){
 	if(err)
		console.log(err);
	else
		console.log(post);

 });*/
 User.findOne({name:"Anjaly Santy"},function(err,founduser){
 	if(err)
 		console.log(err)
 	else
 	{
 		founduser.posts.push({
 			title:"The Bravest man Known in the whole universe",
 	        content:"Ebin Santy is the bravest man i know the whole universe>he is damn good"
 		});
 		founduser.save(function(err,user){
 			if(err)
 				console.log(err);
 			else
 				console.log(user)

 		});
 		

    }
 });














