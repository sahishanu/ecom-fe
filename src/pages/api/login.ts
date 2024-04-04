import User from "@/dbSchema/userSchema";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { dbConnect } from "../../../lib/utils/db";
import {serialize} from 'cookie';

export default async function handler(req:NextApiRequest  , res:NextApiResponse) {
    const { method } = req
    if (!(method==='POST')){
      return res.status(400).json({ 
        success: false ,
        error:"Only get request allowed",
        method:method
      })
    }
    try {
      const db= await dbConnect();
        const { email, password }= req.body;
        // Find the user by email
        const user = await User.findOne({ email });
  
        if (!user) {
          return res.status(401).json({ error: 'Invalid credentials username' });
        }
  
        // Compare the password
        const isPasswordValid: boolean = await bcrypt.compare(password, user.password);
  
        if (!isPasswordValid) {
          return res.status(401).json({ error: 'Invalid credentials password' });
        }
  
        // Generate and send a JWT token for authentication
        const accessToken= generateAccessToken(user.email);


        //creating setting  cookie
        const cookie =setCookies(accessToken);

        res.setHeader('Set-Cookie', cookie);
  
        res.status(200).json({
             message: 'Login successful',
             user: user,
             accessToken: accessToken,
    
    });
      } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    }
 
    
    export const generateAccessToken = (email: string): string => {
      const secret=process.env.ACCESS_TOKEN_SECRET||"default";
      return jwt.sign({ email },secret , { expiresIn: '15m' });
      
    };

   

    export const setCookies=(token: string)=>{
      // Set the token in a cookie
        const cookieOptions = {
          httpOnly: true, // The cookie is accessible only through HTTP(S) requests
          secure: process.env.NODE_ENV === 'production', // Set to true in production for secure HTTPS connection
          sameSite: "strict" as const, // Ensures the cookie is sent only for same-site requests
          maxAge: 3600, // Cookie expiration time in seconds
          path: '/', // The path for which the cookie is valid
        };

      const cookie = serialize('token', token, cookieOptions);

      return cookie;
    }