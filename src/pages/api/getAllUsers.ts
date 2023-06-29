import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

import UserSchema from "@/dbSchema/userSchema";
import { dbConnect } from "../../../lib/utils/db";
import isLoggedIn from "@/middleware/isLoggedIn";
interface CustomNextApiRequest extends NextApiRequest {
  email?: string;
}
const getAllUsers=async (req: CustomNextApiRequest, res: NextApiResponse)=> {
  
    const { method } = req
    if (!(method==='GET')){
      return res.status(400).json({ 
        success: false ,
        error:"Only get request allowed",
        method:method
      })
    }
  
   const db= await dbConnect();
//    console.log("dp****  "+ db);
  
    try{
          const users =  await UserSchema.find({});
          res.status(200).json({ user: req.email,success: true, data: users })
        } catch (error) {
          res.status(400).json({ error: error })
        }
    
  }

  export default isLoggedIn(getAllUsers);

