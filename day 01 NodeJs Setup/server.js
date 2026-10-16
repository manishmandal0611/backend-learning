// console.log("hello manish")
// console.log("where are you from??")
// console.log("i am from noida")
// console.log("whatt happen dude??")

let http = require("http"); //yeh server banane waala tool hai. banane ke baad poore tool ko http naam ke variable mein store kar liya.
// console.log(http);

let server = http.createServer((req, res) => {
  // server ko create kiya gya
  console.log("hello i am server"); //Yeh aapke terminal/console par print hoga taaki aapko pata chale ki kisi ne request bheji hai
  res.end("okay main ne tumhari baat su n lii hai acche se"); //Yeh line user/browser ko data bhejti hai aur connection ko close
});

server.listen(3000, () => {
  // yaha par server su n ta hai server kya port likh na hai
  console.log("server is running port 3000");
});

// Practise/////

let http = require("http");
let server = http.createServer((req, res) => {
  console.log("hello i am server");
  res.end("okay main ne sun liya hu");
});

server.listen(6000, () = > {
  console.log("server is running port 6000");
});

// let http = require("http");
// let server = http.createServer((req, res) => {
//   console.log("hello i am server");
// });

// server.listen(4000, () => {
//   console.log("server is running port 4000");
// });

// let http = require("http");
// let server = http.createServer((req, res) => {
//   console.log("hello i am server");
// });

// server.listen(6000, () => {
//   console.log("surver is running port 6000");
// });

// let http = require("http");
// let server = http.createServer((req, res) => {
//   console.log("hello i am server");
// });

// server.listen(7000, () => {
//   console.log("server is running port 7000");
// });

// let http = require("http");
// let server = http.createServer((req, res) => {
//   console.log("hello i am server");
// });

// server.listen(8000, () => {
//   console.log("server is running port 8000");
// });

// let http = require("http");
// let server = http.createServer((req, res) => {
//   console.log("hello i am server");
// });

// server.listen(9000, () => {
//   console.log("server is running port 9000");
// });

// let http = require("http");
// let server = http.createServer((req, res) => {
//   console.log("hello i am server");
// });

// server.listen(1000, () => {
//   console.log("server is running port 1000");
// });

// let http = require("http")
// let server = http.createServer((req, res) => {
//   console.log("hello i am server")
// })

// server.listen(1100, () => {
//   console.log("surver is running port 110")
// })

// let http = require("http")
// let server = http.createServer((req. res) => {
//   console.log("hello i am server")
// })

// server.listen(1200, () => {
//   console.log("server is running port 120")
// })


let http = require("http");
let server = http.createServer((req, res) => {
  console.log("hello i am server");
  res.end("okay main samaj gya huu")
})

server.listen(6000,() => {
  console.log("server is running port 6000")
})