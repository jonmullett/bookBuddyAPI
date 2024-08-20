const express = require ("express");
const apiRouter = express.Router();

apiRouter.use("/books", require("./books"));

apiRouter.use ("/users", require("./users"));

apiRouter.get("/", (req, res)=>{
    res.send("hello from /api");
});

module.exports = apiRouter;
