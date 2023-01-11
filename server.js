const { response } = require('express');
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 5000;

function sendEmail(){
    
    return new Promise((resolve, reject)=>{
        var transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'neethubalakrishna@gmail.com',
                pass:'druecpqscallasne'
            }
        })
        const mail_configs={

            from:'neethubalakrishna@gmail.com',
            to:'sarathgopinathac@gmail.com',
            subject:'Test code',
            text:"Sample code for checking working of Nodemail"

        }
        
        transporter.sendMail(mail_configs, function(error,info){
            if(error){
                console.log(error);
                return reject({message: "An error has occured"})
            }
            return resolve({message:"Email sent successfully"})
        });
    })
}


app.get('/',(req,res)=>{
    sendEmail()
    .then(response=>res.send(response.message))
    .catch(error=>res.status(500).send(error.message))
})

app.listen(port,()=>{
    console.log("server listening to port 5000");
})
