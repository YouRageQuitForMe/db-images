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
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Math.round(Math.random() * 10000)
//       cb(null, file.originalname + '-' + uniqueSuffix)
//     }
//   })

// module.exports = multer({ storage: storage });