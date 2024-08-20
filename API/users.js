const express = require("express");
const userRouter = express.Router();

userRouter.get("/me", (req, res)=>{
    res.send ("here is your account")
});

userRouter.post("/register", (req, res)=> {
    res.send("userRegistered");
    });

module.exports = userRouter;

