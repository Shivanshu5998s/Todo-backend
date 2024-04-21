const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/TaskRoute")

const cors = require("cors");

const app = express();
const PORT = process.env.PORT | 5000;


app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => {
//     res.send("Hi Shivanshu Chobey");
// })

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected..."))
.catch((err) => console.log(err))

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listen at port ${PORT}`));
