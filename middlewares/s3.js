const fs = require("fs");
const S3 = require("aws-sdk/clients/s3");

const bucketName = process.env.AWS_NAME;
const bucketRegion = process.env.AWS_REGION;
const accessKey = process.env.AWS_ACCESS_KEY;
const secretKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new S3({
    region: bucketRegion,
    accessKeyId: accessKey,
    secretAccessKey: secretKey
})

module.exports = s3;

//upload a file to s3
// exports.uploadFile = (file) => {
//         const fileStream = fs.createReadStream(file.path);

//         const uploadParams = {
//             Bucket: bucketName,
//             Body: fileStream,
//             Key: file.filename
//         }
//         s3.getObject
//         return  s3.upload(uploadParams).promise();    
// }

//download a file froms s3