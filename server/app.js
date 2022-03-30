const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const http = require("http");
const { join } = require("path");

const { notFound, errorHandler } = require("./middleware/error");
const authRouter = require('./routes/auth');
const tagsRouter = require('./routes/tags')

const connectDB = require("./db/database.js");
const Story = require("./models/Story");

const { json, urlencoded } = express;

require("dotenv").config();
connectDB();

const app = express();
const server = http.createServer(app);

//logger
if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use("/auth", authRouter);
app.use("/tags", tagsRouter);
app.get("/", (req, res) => {
  res.send("API is running");
});
app.use(notFound);
app.use(errorHandler);


// Handle unhandled promise rejections
process.on('Main Process unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});

server.listen(8080,() => {console.log("Backend Initialized")});
module.exports = { app, server };