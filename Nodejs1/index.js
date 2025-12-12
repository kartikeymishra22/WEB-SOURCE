// let argv = process.argv;

// console.log(argv);
// console.dir(process);

// for(let i = 0; i<argv.length; i++){
//     console.log(argv[i]);
// };

// const math = require("./math");

// console.log(math);

// const fruits = require("./fruits");
// console.log(fruits[2].orange.name);

const figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });