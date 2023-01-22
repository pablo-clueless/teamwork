import * as bcrypt from "bcrypt";

export const hashData = (data: any) => {
    return bcrypt.hash(data, 10);
}

export const compareDate = (plain: any, hashed: string) => {
    return bcrypt.compare(plain, hashed);
}