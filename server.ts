//https://developer.okta.com/blog/2019/05/07/nodejs-typescript-api
import express from "express";
import {Schema, mongo} from "mongoose";
import mongoose from 'mongoose';
import {authorI, qouteI, bookI, characterI} from './interfaces';
const path = require("path");

// authorName : string,
// numOfBooks? : number,
// publisher? : string,
// avgRating? : number, 
// currentlyWorkingOnBook? : boolean,
// faveQoutes? : qouteI[],
// books? : bookI[],


//https://medium.com/@tomanagle/strongly-typed-models-with-mongoose-and-typescript-7bc2f7197722

const QouteSchema : Schema = new Schema({
  qoute : {type : String, required : true},
})


const AuthorSchema : Schema = new mongoose.Schema({
  authorName : {type : String, required : true, unique : true, minlength : 3},
  faveQoutes : [QouteSchema],
  //intentionally leave off books for now and that ought to work since it's is optional on the interface side
})

mongoose.connect('mongodb://localhost/authors_db', { useNewUrlParser: true });

// https://stackoverflow.com/questions/34482136/mongoose-the-typescript-way
//wasn't working at first and this fixed it !
const Author = mongoose.model<authorI>("Author", AuthorSchema);


const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public')); /////COMMENT OUT IF TESTING VIA POSTMAN

app.get("/allauthors", (req : express.Request, res : express.Response)=>{
  console.log("antyhing");
  Author.find({})
  .then((data)=>{
    if (data.length == 0) {
      res.json({"message" : "it looks like there was no author data"})
    }
    else {
      console.log("the data coming back", data);
      res.json({data : data, message : "success"});
    }
  })
  .catch((err) => {res.json({data : err, message : "err"})});
})

app.post("/newauthor", (req : express.Request, res : express.Response) => {
  Author.create(req.body)
  .then((data) => {
    console.log("the data", data);
    res.json({message : "success", data : data});
  })
  .catch((err) => {console.log("there was an error", err), res.json({data : err, message : "err"})});
})



app.put("/editauthor/:id", (req : express.Request, res : express.Response) => {
  //use $set to update multiples
  Author.updateOne({_id : req.params.id} , req.body, {runValidators : true})
  .then((data) => {
    res.json({message : "success", data : data});
  })
  .catch(err => res.json({data : err, message : "err"}));
})

app.delete("/deleteauthor/:id", (req : express.Request, res : express.Response) => {
  Author.deleteOne({_id : req.params.id})
  .then((data)=>{
    return res.json({data : data, message : "success"});
  })
  .catch(err => res.json({data : err, message : "err"}));

})

app.get("/details/:id", (req : express.Request, res : express.Response) => {
  Author.find({_id : req.params.id})
  .then((comeback) => {
    res.json(comeback);
  })
  .catch(err => res.json({data : err, message : "err"}));
})

app.delete("/deleteall", (req : express.Request, res : express.Response) => {
  Author.deleteMany({})
  .then((comeback) => {
    res.json(comeback);
  })
  .catch(err => res.json({data : err, message : "err"}));
})

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});


app.listen(8000, ()=>{console.log("listening on port 8000")})