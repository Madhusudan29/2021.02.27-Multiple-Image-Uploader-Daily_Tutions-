const fileModel = require("../database/Schema");
const fs = require("fs");

exports.home = async (req, res) => {
  const all_files = await fileModel.find();
  res.render(`main`, { images: all_files });
};

exports.fileUploads = (req, res, next) => {
  const files = req.files;
  //   console.log(files);
  if (!files) {
    const error = new Error("Please choose file");
    error.httpStatusCode = 400;
    return next(error);
  }
  let imgArry = files.map((file) => {
    let img = fs.readFileSync(file.path);
    return (encodedFile = img.toString("base64"));
  });
  let result = imgArry.map((src, index) => {
    let finalImg = {
      fileName: files[index].originalname,
      contentType: files[index].mimetype,
      imageBased64: src,
    };
    let newUpload = new fileModel(finalImg);
    return newUpload
      .save()
      .then(() => {
        return {
          msg: `Image Uploaded Successfully!`,
        };
      })
      .catch((error) => {
        if (error) {
          if (error.name === "MongoError" && error.code === 11000) {
            return Promise.reject({
              error: `Duplicate File.\nFile Already Exist!`,
            });
          }
          return Promise.reject({
            error: error.message || "Cannot Upload!",
          });
        }
      });
  });
  Promise.all(result)
    .then((msg) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.json(err);
    });
};
