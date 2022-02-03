const ImageModel = require("../models/Image");
const { uploadFile } = require("../middlewares/s3")


exports.handlePost = async (req, res) => {
    const file = req.file;
    const name = req.body.name;

    const image = await new ImageModel({
        name: name,
        url: file.path
    })
    await image.save();

    // const result = await uploadFile(file);
    res.send("Image saved");

}