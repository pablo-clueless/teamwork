import http from 'http'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { Server, Socket } from 'socket.io'

import { getApp } from './src/server'
import KEYS from './src/common/config/key'
import { wrap } from './src/common/middlewares/io'
import { sessionMiddleware } from './src/common/middlewares/session'

const app = getApp()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: [''],
        allowedHeaders: ['Authorization']
    }
})

dotenv.config()

mongoose.connect(KEYS.mongoDBUri)
mongoose.set('strictQuery', false)
const db = mongoose.connection
db.once('open', () => console.log('successfully connected to MongoDB'))
db.on('error', console.error.bind(console, 'connection error: '))

//socket connection
io.use(wrap(sessionMiddleware))
io.on('connection', (socket: Socket) => console.log(`socket id: ${socket.id}`))

server.listen(KEYS.port, () => console.log(`server running on port: ${KEYS.port}`))