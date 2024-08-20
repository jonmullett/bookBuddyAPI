const express = require("express");
const app = express();
const PORT = 3000;

app.use("/api", require("/api"));

app.get ("/", (req, res)=>{
res.send("hello from teh server");
});

app.listen(PORT, ()=>{
    console.log(`server allive on port ${PORT}`);
});

module.exports = app;