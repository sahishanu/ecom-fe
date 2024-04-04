import { destroyCookie } from 'nookies';
import { NextApiRequest, NextApiResponse } from "next"
import { serialize } from 'cookie';



export default async function handler(req:NextApiRequest,res:NextApiResponse){

    
    res.setHeader("Set-Cookie",setCookies("deleted"));
    
    res.status(200).json({
       message: 'Logout successful' 
    })

}
const setCookies=(token: string)=>{
    // Set the token in a cookie
      const cookieOptions = {
        httpOnly: true, // The cookie is accessible only through HTTP(S) requests
        secure: process.env.NODE_ENV === 'production', // Set to true in production for secure HTTPS connection
        sameSite: "strict" as const, // Ensures the cookie is sent only for same-site requests
        maxAge: 0, // Cookie expiration time in seconds
        path: '/', // The path for which the cookie is valid
      };

    const cookie = serialize('token', token, cookieOptions);

    return cookie;
  }