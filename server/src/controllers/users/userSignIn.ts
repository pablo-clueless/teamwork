import HTTP from "../../common/constants/http";
import { ConflictError } from "../../common/errors/conflictError";
import { hashData } from "../../common/helpers";
import { ControllerArgs } from "../../common/types";
import { userModel } from "../../models";



export const signUp = async ({ body }: ControllerArgs) => {
    const { email, name, password, username } = body;

    const userExists = await userModel.find({ email });
    if(userExists) throw new ConflictError("user already exists");

    const hashPassword = hashData(password);

    const user = new userModel({ 
        email,
        name,
        password: hashPassword,
        username,
    });

    await user.save()

    return {
        status: HTTP.CREATED,
        message: "User registered sucessfully",
        user,
    }
    
}
