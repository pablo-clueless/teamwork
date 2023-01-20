import express, { Express, Request, Response, NextFunction, Router } from 'express'
import morgan from 'morgan'
import multer from 'multer'
import cors from 'cors'

import { sessionMiddleware } from './common/middlewares/session'
import RESPONSE from './common/helpers/responseMessage'
import createError from './common/helpers/createError'
import HTTP from './common/constants/http'
import KEYS from './common/config/key'

const upload = multer()

export const getApp = () => {
    const app:Express = express()
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(sessionMiddleware)
    app.use(morgan('dev'))

    app.use((_err: any, _req: any, _res: any, _:any) => {
        if(_err instanceof SyntaxError) {
            return _res.status(HTTP.BAD_REQUEST).json({
                code: HTTP.UNPROCESSABLE_ENTITY,
                status: RESPONSE.ERROR,
                message: "Invalid JSON payload passed.",
                data: null,
            })
        }
    })

    const apiRouter = Router()
    apiRouter.use((_req: any, _res: any, next) => {
        next(
            createError(HTTP.NOT_FOUND, [
              {
                code: HTTP.NOT_FOUND,
                status: RESPONSE.ERROR,
                message: "Route not found.",
                data: null,
              },
            ])
        )
    })

    apiRouter.use((error:any, _req:any, res:Response, _next: NextFunction) => {
        console.log(error);
        const initialError = error;
        if (!error.statusCode) {
          error = createError(HTTP.SERVER_ERROR, [
            {
              code: HTTP.SERVER_ERROR,
              status: RESPONSE.ERROR,
              message: initialError.message || "Internal Server Error.",
              data: error.data,
              stack: error.stack,
            },
          ])
        }
    
        return res.status(error.statusCode).json({
          code: error.code,
          status: error.status,
          message: error.message,
          data: error.data || null,
          ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
        })
    })
    const apiUrl = `/traxo-finance/${KEYS.appVersion}`
    app.get(apiUrl, async(req: Request, res: Response) => {
        res.send({ message: 'Welcome to Traxo Finance servers.' })
    })

    app.use(apiUrl, apiRouter)
    return app
}