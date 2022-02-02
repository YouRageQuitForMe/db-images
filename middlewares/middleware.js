const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Math.round(Math.random() * 10000)
      cb(null, file.originalname + '-' + uniqueSuffix)
    }
  })

module.exports = multer({ storage: storage })
;