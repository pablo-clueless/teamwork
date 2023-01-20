import dotenv from 'dotenv'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import KEYS from '../config/key'

dotenv.config()

const secret = KEYS.jwtSecret
const uri = KEYS.mongoDBUri

const store = MongoStore.create({
    mongoUrl: uri,
    collectionName: 'traxo-client-sessions',
    ttl: 1209600,
    autoRemove: 'native',
})

export const sessionMiddleware = session({
    secret,
    store,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 864000, httpOnly: true, secure: false }
})
