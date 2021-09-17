const express = require("express");
const cors = require("cors");
var compression = require('compression');
require('dotenv').config();

const app = express();

// CORS config
app.use(cors({
  origin: "*"
}));

// use GZIP for faster response
app.use(compression())

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// route
require("./app/routes/order.routes")(app);

// set port, listen for requests
const PORT = process.env.APP_PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
