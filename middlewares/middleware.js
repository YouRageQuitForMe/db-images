const multer = require("multer");
const multerS3 = require("multer-s3");
const s3 = require("./s3");

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_NAME,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, `${Date.now().toString()}-${file.originalname}-${file.fieldname}-${Math.round(Math.random()*10E9)}`)
    }
  })
})

module.exports = upload;
