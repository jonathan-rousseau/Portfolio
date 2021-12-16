const nodemailer = require("nodemailer");
let data = req.body
const transporter = nodemailer.createTransport(transporter{
    service: "hotmail",
    port: 465,
    auth:{
        user:'jonathan.rsu@live.fr',
        pass: 'Azertyui44!'
    }
})

let mailOptions = {
    from: data.email,
    to:'jonathan.rsu@live.fr',
    subject: `message from ${data.name}`,
}