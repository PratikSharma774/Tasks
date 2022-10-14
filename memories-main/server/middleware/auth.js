//middleware checks the token verifivcation given by user 
// checks weather user is what he claiming to be
import jwt ,{decode}from 'jsonwebtoken'
const auth=async(req,res,next)=>{
    try{
        // console.log(req.heders);
        const token =req.headers.authorization.split(" ")[1];
        const isCustomAuth=token.length<500;
        let decodeData;
        if(token && isCustomAuth){
            decodeData=jwt.verify(token,'test');
            req.userId=decodeData?.id;
        }
        else{
            decodeData=jwt.decode(token);
            req.userId=decodedData?.sub;
        }
        next();
    }catch(error){
        console.log(error);
    }
}
export default auth;