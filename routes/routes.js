const express = require("express");
const router = express.Router();

const { handlePost, handleGet } = require("../controllers/controller");
const storage = require("../middlewares/middleware");

router.post('/post-image', storage.single("file"), (req, res) => {
    if (req.file) {
        handlePost(req, res);
        console.log(req.file)
    }
    else res.json({message: "No file was uploaded!"});
})

router.get('/get-image/:key', (req, res) => {
    handleGet(req, res);
})

module.exports = router;