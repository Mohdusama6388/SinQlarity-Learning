module.exports.add= (req,res)=>{
   let n1=req.body.num1;
   let n2=req.body.num2;
   let sum=n1+n2;
   res.send(`sum =${sum}`);
};
module.exports.substract= (req,res)=>{
   let n1=req.body.num1;
   let n2=req.body.num2;
   let diff=n1-n2;
   res.send(`difference =${diff}`);
}
module.exports.Multiply= (req,res)=>{
   let n1=req.body.num1;
   let n2=req.body.num2;
   let product =n1*n2;
   res.send(`product =${product}`);
};
module.exports.divide= (req,res)=>{
   let n1=req.body.num1;
   let n2=req.body.num2;
   let division=n1/n2;
   res.send(`division =${division}`);
};