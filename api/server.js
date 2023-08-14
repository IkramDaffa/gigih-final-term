const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const { connect, disconnect } = require("./config/db.config");

if (process.env.ENVIRONMENT !== "production") {
  require("dotenv").config();
}
connect();
const routes = require("./routes/routes");

const app = express();
const port = process.env.PORT || 3080;
const cors = require("cors");
app.use(cors());

app.use(express.static(path.join(__dirname, "./ui/build")));
app.use(bodyParser.json({ limit: "25mb" }));

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
});
