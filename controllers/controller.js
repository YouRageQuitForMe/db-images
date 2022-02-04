const ImageModel = require("../models/Image");
const s3 = require("../middlewares/s3")


exports.handlePost = async (req, res) => {
    const file = req.file;
    const name = req.body.name;

    const image = await new ImageModel({
        name: name,
        url: file.path
    })
    await image.save();

    res.send("Image saved");

}

exports.handleGet = async (req, res) => {
    const options = {
        Bucket: process.env.AWS_NAME,
        Key: req.params.key
    }
    const fileStream = s3.getObject(options).createReadStream();
    fileStream.pipe(res);
}