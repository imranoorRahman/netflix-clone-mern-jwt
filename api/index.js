const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");

dotenv.config();

const app = express();
const PORT = process.env.REACT_APP_PORT || 5005;

mongoose.connect(process.env.REACT_APP_MONGO_URI, {})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);

app.listen(PORT, () => {
    console.log(`Backend server is live on port: ${PORT}`)
});
