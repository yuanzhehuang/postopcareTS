import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({ region: "YOUR_REGION" });

export const uploadPDF = async (file: File, key: string) => {
  const command = new PutObjectCommand({
    Bucket: "YOUR_BUCKET_NAME",
    Key: key,
    Body: file,
    ContentType: "application/pdf"
  });

  try {
    const response = await s3Client.send(command);
    return response;
  } catch (error) {
    console.error('Error uploading PDF:', error);
    throw error;
  }
};

export const getPDFUrl = async (key: string) => {
  const command = new GetObjectCommand({
    Bucket: "YOUR_BUCKET_NAME",
    Key: key,
  });

  try {
    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    return url;
  } catch (error) {
    console.error('Error getting PDF URL:', error);
    throw error;
  }
};