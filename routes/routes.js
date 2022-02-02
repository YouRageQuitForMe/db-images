const express = require("express");
const router = express.Router();

const { handlePost } = require("../controllers/controller");
const storage = require("../middlewares/middleware");

router.post('/post-image', storage.single("file"), (req, res) => {
    handlePost(req, res);
})

module.exports = router;