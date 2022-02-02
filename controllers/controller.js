const ImageModel = require("../models/Image");

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