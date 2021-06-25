const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();
const port=80;
app.use('/static',express.static('static'))
app.use(express.urlencoded())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views'))
app.get('/', (req,res)=>{
    const con="This is the best content on the internet so far so use it wisely"
    const params={'title':'Join the best gym now',"content":con}
    res.status(200).render('index.pug',params);
})

// app.get("/demo", (req, res) => {
//     res.status(200).render('demo', { title: "Hey Harry", message: "Thank you for telling pug"})
//   });
// app.get("/about", (req,res)=>{//     res.send("This is about page of my first express app with Harry")
// });
// app.post("/this", (req,res)=>{
//     res.status(404).send("This page is not found")
// });

app.post('/', (req,res)=>{
    name1=req.body.name1
    age=req.body.age
    gender=req.body.gender
    address=req.body.address
    more=req.body.more
    let outputToWrite=`The name of the client is ${name1},${age} years old,${gender},residing at ${address}.More about him/her:${more}`
    fs.writeFileSync('output.txt',outputToWrite)
    const params={'message':'Your form has been submitted ssuccesfully'}
    res.status(200).render('index.pug',params);
})

app.listen(port,()=>{
    console.log(`The application started succesfullyon port ${port}`)
})