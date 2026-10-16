 const { default: mongoose } = require("mongoose");
 
 const connectDB = async () => { 
    try {
        await mongoose.connect(
            "mongodb+srv://manishmandal0611_db_user:Manish_Khushboo_310321@cluster0.fcbra9e.mongodb.net/?appName=Cluster0"
        );
    
        console.log("mongoodb connected");
    } catch (error) {
        console.log("error while connecting db", error);
        
    }

};

module.exports = connectDB;