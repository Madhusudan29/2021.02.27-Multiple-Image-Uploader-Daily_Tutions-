const mongoose = require("mongoose");
mongoose
  .connect(process.env.AtlasUrl, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected TO DataBase`))
  .catch(() => console.log(`Not Connected TO DataBase`));
