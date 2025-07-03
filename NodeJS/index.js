const express = require('express');
const CalculatorRouter=require('./routers/calculator');
const app = express();
app.use(express.json());

 app.get('/add',(req,res)=>{
    let sum= 0;
    res.send(`sum = ${sum}`)
    

 });
// app.post ('/add',(req,res)=>{
//    let n1=req.body.num1;
//    let n2=req.body.num2;
//    let sum=n1+n2;
//    res.send(`sum =${sum}`);
// });
// app.post ('/substract',(req,res)=>{
//    let n1=req.body.num1;
//    let n2=req.body.num2;
//    let diff=n1-n2;
//    res.send(`difference =${diff}`);
// })
// app.post ('/Multiply',(req,res)=>{
//    let n1=req.body.num1;
//    let n2=req.body.num2;
//    let product =n1*n2;
//    res.send(`product =${product}`);
// })
// app.post ('/divide',(req,res)=>{
//    let n1=req.body.num1;
//    let n2=req.body.num2;
//    let division=n1/n2;
//    res.send(`division =${division}`);
// })
app.use('/calculator',CalculatorRouter);
 app.listen(3000);