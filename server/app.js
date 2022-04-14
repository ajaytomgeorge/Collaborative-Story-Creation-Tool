const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");
const http = require("http");
const path = require("path");
const process = require("process");

const { notFound, errorHandler } = require("./middleware/error");
const authRouter = require("./routes/auth");
const tagsRouter = require("./routes/tags");
const storyRouter = require("./routes/story");
const logsRouter = require("./routes/logs");

const connectDB = require("./db/database.js");

const { json, urlencoded } = express;

require("dotenv").config();
connectDB();

const app = express();
const server = http.createServer(app);
app.use(
  cors({
    origin: ["http://localhost:3000","https://storyfactoryadvanced.herokuapp.com/"],
    credentials: true,
  })
);

//logger
if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}
app.use(express.json({ extended: false, limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: false, parameterLimit: 50000 })
);

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, "../client/build")));

// app.get('/*', function(req,res) {
//   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });
app.use("/auth", authRouter);
app.use("/tags", tagsRouter);
app.use("/story", storyRouter);
app.use("/logs", logsRouter);

app.get("/", (req, res) => {
  res.send("API is running");
});
app.use(notFound);
app.use(errorHandler);

// Handle unhandled promise rejections
process.on("Main Process unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});

server.listen(process.env.PORT || 8080,'0.0.0.0', () => {
  console.log("Backend Initialized");
});
module.exports = { app, server };
