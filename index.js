const express = require("express");
const cors = require("cors");

const App = express();

App.use(cors());

App.use(express.static("public"));

App.get("/", (req, res) => {});

App.listen(5000);
