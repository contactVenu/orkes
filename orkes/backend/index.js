const axios=require('axios')
const express=require('express')
const cors=require('cors')

const app=express()
app.use(cors())
app.use(express.json())

app.get('/page1',(req,res)=>{
    axios.get('https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1')
    .then(response=>res.send(response.data))
    .catch(err=>console.log(err))
})
app.get('/page2',(req,res)=>{
    axios.get('https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/2')
    .then(response=>res.send(response.data))
    .catch(err=>console.log(err))
})
app.get('/page3',(req,res)=>{
    axios.get('https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/3')
    .then(response=>res.send(response.data))
    .catch(err=>console.log(err))
})

app.listen(5000,()=>{
    console.log("Server Listening on Port 5000")
})