const express = require("express");
const app = express();
const PORT = 3000;

require("dotenv").config(); 


const client = require("./db/client");

client.connect();

app.use ("/api", require("./api"));


app.get ("/", (req, res)=>{
res.send("hello from the server");
});

app.listen(PORT, ()=>{
    console.log(`server alive on port ${PORT}`);
});

// module.exports = app;