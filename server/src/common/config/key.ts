import dotenv from 'dotenv'

dotenv.config()


const KEYS  = Object.freeze({
    appVersion: process.env.VERSION as string,
    port : process.env.PORT as string,
    mongoDBUri: process.env.MONGO_URI as string,
    cloudinaryName : process.env.CLOUD_NAME as string,
    cloudinaryKey : process.env.CLOUD_KEY as string,
    cloudinarySecret : process.env.CLOUD_SECRET as string,
    jwtSecret: process.env.JWT_SECRET as string,
    expiresIn: process.env.EXPIRES_IN as string
});

export default KEYS