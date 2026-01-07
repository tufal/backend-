import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadoncloudinary = async (localFilepath) => {
    try {
        if (!localFilepath) return null;
        const result = await cloudinary.uploader.upload(localFilepath, {
            resource_type: "auto"
        });
        console.log("Cloudinary upload result:", result.url); // Moved before return
        return result;
    } catch (err) {
        fs.unlinkSync(localFilepath);
        return null;
    }
}

export { uploadoncloudinary };
