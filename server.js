const express = require('express');
const app = express();
require('dotenv').config();

const nodemailer = require('nodemailer')

const PORT = process.env.PORT || 5000;

// Middleware

app.use(express.static('src'))
app.use(express.json())

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/src/contactForm.html')
})

app.post('/', (req,res)=>{
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: process.env.NODEMAILER_SERVICE,
        auth:{
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: process.env.NODEMAILER_USER,
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions,(error, info)=>{
        if(error){
            console.log(error)
            res.send('error')
        }else{
            console.log('Email sent:'+info.response)
            res.send('success')
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})