import RESPONSE from './responseMessage'
import HTTP from '../constants/http'

const createError = (status: number, data: any) => {
    return {
        status: data[0].status,
        message: data[0].message,
        data: data[0].data,
        stack: new Error().stack,
        statusCode: status,
    }
}

createError.internalServerError = (data: any) => createError(HTTP.SERVER_ERROR, [
    {
        status: RESPONSE.ERROR,
        data,
      stack: process.env.NODE === "development" ? new Error().stack : undefined,
    },
])

export default createError