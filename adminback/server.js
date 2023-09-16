const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

const dotenv = require("dotenv").config();
const dbConfig = require("./config/dbconfig");
const port = process.env.port || 8000;

const userRoute = require("./routes/userRoutes");
app.use("/api/users", userRoute);


const stopRoute = require("./routes/stopRoutes");
app.use("/api/stop", stopRoute);

app.listen(port, ()=>{ console.log(`Node.js Server is listening on port http://localhost:${port}`)})