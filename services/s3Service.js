const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1',
});

const s3 = new AWS.S3();

const BUCKET = 'nano-services-imagens-thumbnail';

const getObject = (bucket, key) => {
    return new Promise((resolve, reject) => {
        s3.getObject({
            Bucket: BUCKET,
            Key: key
        }, (err, data) => {
            reject(err);
            resolve(data.Body);
        });
    });
};

const putObject = (buffer, filename) => {
    return new Promise((resolve, reject) => {
        s3.getObject({
            Bucket: BUCKET,
            Key: 'thumbnail' + filename,
            Body: buffer, 
        }, (err, data) => {
            reject(err);
            resolve(data);
        });
    });
};

module.exports = { getObject, putObject };