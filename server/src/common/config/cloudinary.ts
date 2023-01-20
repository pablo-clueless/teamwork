import { v2 as cloudinary } from 'cloudinary'

import KEYS from './key'

cloudinary.config({
    cloud_name: KEYS.cloudinaryName,
    api_key: KEYS.cloudinaryKey,
    api_secret: KEYS.cloudinarySecret
})

export default cloudinary