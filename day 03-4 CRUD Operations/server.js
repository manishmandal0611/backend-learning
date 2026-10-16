// const express = require("express");
// const app = express();

// let port = 3000;

// let users = [                   // let user se ek array banaya jisme objects store kiye gaye hai
//     {
//         name: "Manish Mandal",
//         age: 22,
//         city: "Bangalore"
//     }
// ]

//  get bana liya hum ne get ka matlab hota hai read.
// app.get("/", (req, res) => {     // get api main users array ko response me bhej diya
//   res.send(users);               // res.send se users array ko response me bhej diya
// });


// app.listen(port, () => {
//   console.log(`server is running port ${port}`);
// });








// const express = require("express");

// const app = express();

// app.use(express.json());  // express.json() middleware ko use kiya jisse hum json data ko read kar sake

// let port = 3000;

// let users = []

// ab hum create karenge.           // create samaj liya.

// app.post("/create", (req, res) => {
//     let body = req.body;

//     users.push(body);  // body me jo data aayega usko users array me push kar diya

//     res.send("user save successfully");  // body me jo data aayega usko body variable me store kar diya
// });

                 // read bhi samaj liye hai

// get bana liya hum ne get ka matlab hota hai read.
// app.get("/", (req, res) => {     // get api main users array ko response me bhej diya
//   res.send(users);               // res.send se users array ko response me bhej diya
// });



// Ab samaj na hai upadet ka aur delete.

// update
// app.put("/update/:id", (req, res) => {
//   let { id } = req.params;
//   let { name } = req.body;

//   let updatedUser = users.map((val) =>
//     val.id === id ? { ...val, name } : val
//   );
//   res.send(updatedUser);
// });


// delete
// app.delete("/delete/:id", (req, res) => {
//     let { id } = req.params;
    
//     let userData = users.filter((val) => val.id !== id);
//     users = userData; 
//     res.send("User deleted successfully");    // data variable me id ko store kar diya
// }); 


// app.listen(port, () => {
//   console.log(`server is running port ${port}`);
// });











// const express = require("express");

// const app = express();
// // middleware for accepting json data
// app.use(express.json());
// let port = 3000;

// let users = [];

// // create
// app.post("/create", (req, res) => {
//   let body = req.body;

//   users.push(body);

//   res.send("user saved successfully");
// });

// // get - Read
// app.get("/", (req, res) => {
//   res.send(users);
// });

// // update
// app.put("/update/:id", (req, res) => {
//   let { id } = req.params;
//   let { name } = req.body;

//   let updatedUser = users.map((val) =>
//     val.id === id ? { ...val, name } : val
//   );
//   res.send(updatedUser);
// });

// // delete
// app.delete("/delete/:id", (req, res) => {
//   let { id } = req.params;

//   let userData = users.filter((val) => val.id !== id);
//   console.log(userData);
//   users = userData;
//   res.send(userData);
// });

// app.listen(port, () => {
//   console.log(`server is running on port ${port}`);
// });






                                                       // Practice CRUD Operations

// const express = require("express");
// const app = express();

// app.use(express.json());

// let port = 6000;

// let users = [];

// //create 

// app.post("/create", (req, res) => {
//   let body = req.body;

//   users.push(body);

//   res.send("user saved successfully");
// });


// // get - read
// app.get("/", (req, res) => {
//   res.send(users);
// });


// // update
// app.put("/update/:id", (req, res) => {
//   let { id } = req.params;
//   let { name } = req.body;
// });


// // delete
// app.delete("/delete/:id", (req, res) => {
//   let { id } = req.params;

//   let userData = users.filter((val) => val.id !== id);
//   users = userData;
//   res.send(userData);
// });

// app.listen(port,() => {
//   console.log(`server is running on port ${port}`);
// });







const express = require("express");
const app = express();

app.use(express.json());

let port = 6000;

let users = [];

// create
app.post("/create", (req, res) => {
  let  body = req.body;

  users.push(body);

  res.send("user saved successfully");
});


// get - read
app.get("/", (req, res) => {
  res.send(users);
});


// update
app.put("/update/:id", (req, res) => {
  let { id } = req.params;
  let { name } = req.body;

  let updatedUser = users.map((val) =>
    val.id === id ? { ...val, name } : val
  );
  res.send(updatedUser);
});

// delete
app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;

  let userData = users.filter((val) => val.id !== id);
  users = userData;
  res.send(userData);
});



app.listen(port, () => {
  console.log(`server is running port ${port}`);
});
