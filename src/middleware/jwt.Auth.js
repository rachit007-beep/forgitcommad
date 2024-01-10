import jwt from 'jsonwebtoken';
const jwtToken = (req,res,next)=>{
// 1.read the token 

const token = req.headers['authorization'];

// 2. If no token return the error
if(!token){
    return res.status(401).send('unauthorized');
}
// 3. Check if token is valid or not
try{
    
    const payload = jwt.verify(token,process.env.JWT_Secret);
    
         console.log(payload);
        req.id = payload.userId;
        req.drname = payload.userName;
    }catch(err){
        console.log(err);
      return  res.status(401).send('Invalid! Please try again')
    }

next();
}

export {jwtToken}