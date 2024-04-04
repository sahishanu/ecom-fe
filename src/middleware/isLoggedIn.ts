import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
interface CustomNextApiRequest extends NextApiRequest {
    email?: string;
  }
const isLoggedIn = (handler:any) => async (
    req: CustomNextApiRequest,
    res: NextApiResponse
  ) => {
    try {
      // Retrieve the JWT token from the request headers
      console.log("inside middleware")
      // const token = req.headers.authorization?.replace('Bearer ', '');
      const token = req.cookies.token;
      
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      // Verify the JWT token
      const secret=process.env.ACCESS_TOKEN_SECRET || "default";
      const decoded = jwt.verify(token,secret );
  
      // Attach the user ID to the request for further processing
      if (typeof decoded === 'object' && decoded.email) {
        req.email = decoded.email;
      }
      
      // Call the original handler
      return await handler(req, res);
    } catch (error) {
      console.error('Error in authentication middleware:', error);
      return res.status(401).json({ message: 'Unauthorized', error:error });
    }
  };
  
  
export default isLoggedIn;
