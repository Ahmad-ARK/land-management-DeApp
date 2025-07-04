const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const expressLayouts = require("express-ejs-layouts"); // ADD THIS
const ipfsRoute = require("./routes/ipfs");
app.use("/ipfs", ipfsRoute);


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(expressLayouts); // USE THE LAYOUTS
app.set("layout", "layout"); // DEFAULT layout.ejs file

// View engine setup
app.set("view engine", "ejs");
app.set("layout", "layout");
app.set("views", path.join(__dirname, "views"));

// Routes
const routes = require("./routes/index");
app.use("/", routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
