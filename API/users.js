const express = require("express");
const userRouter = express.Router();

userRouter.get("/me", (req, res)=>{
    res.send ("here is your account")
});

userRouter.post("/register", (req, res)=> {
    console.log (req, body);
    res.send("userRegistered");
    });

    userRouter.post("/login", (req, res) => {
        console.log("REQUEST BODY", req.body);
res.send("You logged in successfully");
    });

module.exports = userRouter;

