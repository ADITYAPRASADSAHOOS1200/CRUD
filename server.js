const app=require("./app.js");
const PORT=process.env.PORT;

app.listen(PORT,()=>{
   console.log(`The Port Is Running ${PORT}`);   
})

