import {v2 as cloudinary} from "cloudinary"


const connectCloudinary = async ()=>{
    cloudinary.config({
        cloud_name: process.env.CLOUDNIARY_NAME,
        api_key: process.env.CLOUDNIARY_API_KEY,
        api_secret: process.env.CLOUDNIARY_SECRET_KEY,
    })
}

export default connectCloudinary