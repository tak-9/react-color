var express = require("express");
var cors = require("cors");
var compression = require("compression");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

// Serve up static assets (For heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(
    cors({
      origin: ["http://localhost:3000", "https://react-color-tak.herokuapp.com"], // allow to server to accept request from different origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
    })
);

// Define Routes for API 
require("./routes/api-routes.js")(app);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start server
app.listen(PORT, async function() {
    console.log("==> Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
