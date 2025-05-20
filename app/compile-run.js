const express  = require("express")
const router = express.Router();


router.use("/",(req,res)=>
{
    res.status(200).render("compiler/index")
})


module.exports  = router