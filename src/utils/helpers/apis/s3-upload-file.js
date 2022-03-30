import S3 from 'react-aws-s3';

import { S3_CONFIG } from 'config';

const uploadFileToS3 = async (file, categoryName) => {
  const now = Date.now();
  const newFileName = `${categoryName}-${now}-${file.name}`;
  console.log('S3 CONFIG', S3_CONFIG)
  const ReactS3Client = new S3(S3_CONFIG);
  return ReactS3Client.uploadFile(file, newFileName).then(data => {
    if (data.status === 204) {
      return { isSuccess: true, data };
    } else {
      return { isSuccess: false };
    }
  })
}

export default uploadFileToS3;
