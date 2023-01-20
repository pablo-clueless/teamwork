import { NextFunction } from 'express'
import { Socket } from 'socket.io'
import { ExtendedError } from 'socket.io/dist/namespace'

export const wrap = (middleware: any) => (socket: Socket, next: (err?: ExtendedError | undefined) => void) => middleware(socket.request, {}, next)