// let mongoose = require("mongoose");
// let dbuRI = "mongodb://localhost:27017/pawII-si5c";

// mongoose.connect(dbuRI, {
//     //userNEWUrlParser: true
// });
// mongoose.connection.on("connection",() => {
//     console.log("Connected to mongoDB");

// });
// mongoose.connection.on("eror", (error) => {
//     console.log("Connection Eror :" + error);

// });
// mongoose.connection.on("disconnected", () => {
//     console.log("Disconnected From Mongodb");
// });
// // ... your db connection
// //letakkan di dalam file db.js

// require("./mahasiswa");

let mongoose = require("mongoose");
let dbURI = "mongodb+srv://paw2:si@paw2.iendmj6.mongodb.net/PAWII-SI?retryWrites=true&w=majority&appName=paw2";

mongoose.connect(dbURI,{
    //useNewURLParser: true
});

mongoose.connection.on("connected", () => {
    console.log("Connected To MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.log("Connection Error: " + error);
});

mongoose.connection.on("disconected", () => {
    console.log("Disconnected From MongoDB");
});

require("./mahasiswa");