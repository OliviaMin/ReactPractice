const path=require("path")
const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

const passportJWT=require("./middleware/passportJWT")();

const errorHandler=require('./middleware/errorHandler');
const postRoutes=require("./routes/post")
const authRoutes=require("./routes/auth")

const app=express();

app.use(cors());

mongoose.connect("mongodb://localhost/restapi", {useNewUrlParser:true});
mongoose.connection
 .once("open", ()=>console.log("Connected"))
 .on("error",error=>{
     console.log("Your Error",error);
 });


app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,"public")));

app.use(passportJWT.initialize());

app.use("/api/auth",authRoutes)
app.use("/api/post",passportJWT.authenticate(),postRoutes)
app.use(errorHandler)

app.listen(8000,()=>{
    console.log("Listening..");
})