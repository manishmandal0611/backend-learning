const express = require("express");
const connectDb = require("./config/db");
const NotesModel = require("./models/note.model");

const app = express();
app.use(express.json());





////////////////////// Etna sa function hai jo ki Db ko connect karta hai /////////////////////////////



// ab mai ek function banaunga jo ki db se connect karega.

// const connectDB = async () => {                // yaad rakh na hai mongoose ka jitna bhi operation hoga. maximum promise return karega. esliye async karna pade ga aur await karna pade ga
//     await mongoose.connect(
//         "mongodb+srv://manishmandal0611_db_user:Manish_Khushboo_310321@db-connection.aucucgf.mongodb.net/"
//     );

//     console.log("mongoodb connected");

// };
//  connectDB();

//// Agar error aata hai Db connect kar ne main toh hum laga denge. Error handle Try OR Catch

connectDb();

// hum ek api bana lenge dummy api

app.get("/", (req, res) => {
  res.send("Hello i am ready");
});



app.post("/create", async (req, res) => {
  let { title, description } = req.body;

  const newNote = await NotesModel.create({
    title,
    description,
  });

  res.send({
    success: true,
    message: "Note created successfully",
    date: newNote,
  });
});

module.exports = app; // app ko esport kar diya hai swever.js file main
