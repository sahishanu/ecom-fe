import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

import User from "@/dbSchema/userSchema";
import { dbConnect } from "../../../lib/utils/db";

export default async function handler (req : NextApiRequest, res :NextApiResponse) {
    const { method } = req

    if(!(method==="POST")){
        return res.status(400).json({
            message :"Only post request allowed",
            method: method 
        })
    }
   const db= await dbConnect();
//    console.log("dp****  "+ db);
        
        try {
        console.log(req.body);

        const user =  await User.create(req.body)
          res.status(201).json({ user: user })
        } catch (error) {
          res.status(400).json({ error: error  })
        }
    
  }

