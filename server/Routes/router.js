const express = require("express");
const Router = express.Router();
const controller = require("../controller/controller");
const store = require("../middlewares/multer");

Router.get("/", controller.home);
Router.post("/file/upload", store.array("file", 12), controller.fileUploads);

//
module.exports = Router;
