const express =require ('express')
const app= express();
const port =3000;
app.get('/',(req,res)=>{
    res.status(200).json({message:' this is our intergration of using get'})
});
app.post('/',(req,res)=>{
    res.status(200).json({message:'this is our intergration of using post'})
});
app.listen(port,()=>{
    console.log( `server is running at localhost:${port}`);
})