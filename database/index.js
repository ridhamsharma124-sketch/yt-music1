const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/yt-music")

const db = mongoose.connection

db.on("open", () => {
    console.log("db connected")
})  
