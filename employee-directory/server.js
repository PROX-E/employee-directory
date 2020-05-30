const express = require("express");
const mongoose = require ("mongoose");
const routes= require ("./routes")

const PORT = process.env.PORT || 3000;
const app = express();

// Define middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets 
app.use(express.static(path.join(__dirname, 'public')));


// API routes 
app.use(routes)

//Connet to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {useNewUrlParser: true});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});