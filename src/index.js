const express = require("express");
const app = express();
const path = require("path");
const port = 2345;
const Router = require("../server/Routes/router");
const hbs = require("express-handlebars");
require("../server/database/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultsView: "main",
    layoutsDir: path.join(__dirname, "../views"),
    partialsDir: path.join(__dirname, "../views/partials"),
  })
);
app.use(Router);
app.listen(port, () => {
  console.log(`Servering http://localhost:${port}`);
});
