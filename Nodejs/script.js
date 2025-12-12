// const info = require("./Fruits");

// console.log(info[0].name);

const figlet = require('figlet');

figlet("Kartikey Mishra!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});