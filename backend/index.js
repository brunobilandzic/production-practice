const express = require("express");
const https = require("https")
const fs = require("fs")
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const httpsConfiguration = {
    key: fs.readFileSync("./server.key"),
    cert: fs.readFileSync("./server.cert"),
  };
app.use(express.static(path.join(__dirname, "../client/build")))

app.get("/request", (req, res) => {
  res.json({ message: "Backend API" });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build"))
})


https
      .createServer(httpsConfiguration, app)
      .listen(5000, () => {
        console.log(
          `app running on port 5000`
        );
      });
