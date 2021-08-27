const BUCKET_NAME = process.env.BUCKET_NAME || "my-bucket"

const AWS = require('aws-sdk')
const s3 = new AWS.S3();

const write = async (value,key) => {
    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: key,
        Body: value
    };
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`value written successfully. ${data.Location}`);
    });
}

module.export = write