import express from  'express';
const app=express();
app.use(express.json());
import { body, validationResult } from 'express-validator';
const validationhandler=[body('username').isLength({min:4}),body('email').isEmail(),
body('password').isLength({min:6}).withMessage('min 6 chars required').isLength({max:12}).withMessage('password should be less than 12 char')]
app.post('/', validationhandler,(req:express.Request,res:express.Response)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    res.json({'data':req.body});
}
)
app.listen(3000,()=>{
    console.log("server hit successfully")
})
