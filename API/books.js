const express = require("express");
const bookRouter= express.Router();

bookRouter.use ("/users", require("/users"));

bookRouter.get ("/"), (req, res)  => {
    res.send ("here are all the books");
};

module.exports = bookRouter;