const express = require("express");
const app = express();


require("dotenv").config(); 



const client = require("./db/client");

client.connect();
const PORT = 3000;

app.use (express.json());
app.use ("/api", require("./api"));


app.get ("/", (req, res)=>{
res.send("hello from the server");
});

app.use((err, req, res, next) => {
    res.status(500).send("Something broke...");
  });

app.listen(PORT, ()=>{
    console.log(`server alive on port ${PORT}`);
});

