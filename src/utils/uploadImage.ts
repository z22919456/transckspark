import { v2 } from 'cloudinary';

// https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ff43fd0c-7a2a-4756-848c-ada914666596/%E7%A4%BE%E6%9C%83%E7%B5%84%EF%BC%BFStudio_W_%E8%94%A3%E5%85%AC%E5%85%AC%E5%85%AC%E5%9C%92_%E4%BB%A3%E8%A1%A8%E5%9C%96%E7%89%87.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230507T150242Z&X-Amz-Expires=3600&X-Amz-Signature=b02869b140bceb538a48333815f2e7bbfec9119f70571afcff7f3b831df7e5f9&X-Amz-SignedHeaders=host&x-id=GetObject

const uploadImage = async (url: string, splitCount = 4) => {
  const decordUrl = decodeURIComponent(url);
  const splitDecordUrl = decordUrl.split('/');
  const imageName = `${splitDecordUrl[splitCount]}/${splitDecordUrl[splitCount + 1]}`.split('.')[0];
  const cloudinaryConfig = {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
  };
  try {
    v2.config(cloudinaryConfig);
    // const uploadImageUrl = await v2.url(url, {
    //   width: 1024,
    // });

    // console.log(uploadImage);

    const res = await v2.uploader.upload(url, { public_id: imageName.replace(/[^a-zA-Z0-9_-]/g, ''), overwrite: true });
    console.log('Image Catch: ');
    console.log('  *Name:', imageName);
    console.log('  *URL:', res.secure_url);
    console.log('  *Size:', res.bytes);
    console.log('------------------------------------------------------');
    return res.secure_url;
  } catch (e) {
    console.log('IMAGE UPLOAD ERROR: =========', imageName, '=========');
    console.log(e);
    console.log('======================================================');
    return '';
  }
};

export default uploadImage;
