import AWS from 'aws-sdk'
import { parse } from 'path';

export async function uploadToS3(file:File) {
    try {
        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });
        const s3 = new AWS.S3({
            params: {
                Bucket: process.env.AWS_S3_BUCKET_NAME
            },
            region: process.env.AWS_REGION
        })

        const file_key = 'uploads/' + Date.now().toString() + file.name.replace(' ','-')

        const params = {
            Bucket: process.env.AWS_S3_BUCKET_NAME!,
            Key: file_key,
            Body: file
        }
        

        const upload =  s3.putObject(params).on('httpUploadProgress', function (evt) {
            console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
            console.log('uploading to s3...', parseInt((evt.loaded / evt.total * 100).toFixed(2)).toString() + '%')
        }).promise()

        await upload.then((data) => {
            console.log(data)
            console.log('upload to s3 complete', file_key)
        }
        ).catch((err) => {
            console.log(err)
        })

        return Promise.resolve(
            {
                file_key: file_key,
                file_name: file.name,
                file_url: 'https://' + process.env.AWS_S3_BUCKET_NAME + '.s3.' + process.env.AWS_REGION + '.amazonaws.com/' + file_key
            }
        )


    }
    catch (error) {
        console.log(error)
    }
}