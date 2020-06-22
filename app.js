var express=require("express");
var formidablemidware=require("express-formidable");

var app=express();
app.use(formidablemidware({
    encoding:"utf-8",
    uploadDir:"./my/dir",
    multiples:false
}));

app.post("/upload",function(req,res){

});