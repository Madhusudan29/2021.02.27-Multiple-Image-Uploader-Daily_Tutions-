const multer = require("multer");
let path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../uploads"),
  //   (req,file,cb)=>{cb(null,"upload")},
  filename: (req, file, cb) => {
    var ext = file.originalname.substr(file.originalname.lastIndexOf("."));
    cb(null, file.fieldname + "-" + Date.now() + ext);
  },
});

module.exports = Store = multer({ storage });
