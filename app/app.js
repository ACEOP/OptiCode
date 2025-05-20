const express  = require("express")
const app = express();

//compiler
// app.get("/run",require("./compile-run"))

//compiler
app.get("/",require("./compile-run"))



module.exports  =app