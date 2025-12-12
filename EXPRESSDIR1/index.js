const express = require("express");
const app = express();

let port = 8080;

app.listen(port,() =>{
    console.log(`app is listening on ${port}`);
});

// app.use((req, res) =>{
//     console.log("request received");
//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>";
//     res.send(code);
//     console.log("response sent");
// });

app.get("/:username/:id",(req, res) =>{
    let {username} = req.params;
    console.log(username);
    res.send(`Hello ${username}`);
});

app.get("/search", (req,res)=>{
    let {q} = req.query;
    console.log(q);
    res.send(`You searched for ${q}`);
})