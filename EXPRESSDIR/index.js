const express = require("express");
const app = express();

// console.dir(app);

/* The line `// let port = 3000;` is a commented-out line of code in JavaScript. This means that it is
not active or executed by the program. It is used for adding comments or temporarily disabling code
without deleting it. In this case, the port variable is not being used in the code, so it is likely
commented out for future reference or as a placeholder for setting the port number for the server to
listen on. */
let port = 3000;

app.listen(port, () =>{
    console.log(`app is  listening on ${port}`);
});

// app.use((req, res) =>{
//     console.log("request received");
// });

app.use((req, res) => {
    console.dir(req);
    console.dir(res);
});
