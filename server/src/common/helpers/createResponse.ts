import { Request, Response } from 'express'
import HTTP from '../constants/http';

const createResponse = 
 (message: any, data: any = [], status = "success") =>
  (res: Response , code: number) => {
    return res.status(code).json({ code, status, message, data });
  };

export default createResponse