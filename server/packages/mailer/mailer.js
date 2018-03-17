const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
let transporter
nodemailer.createTestAccount((err) => {
    // create reusable transporter object using the default SMTP transport
    transporter = nodemailer.createTransport({
        host: 'smtp-relay.gmail.com',
        port: 587,
        tls: true,
        ssl: false,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'onclicksell@hotmail.com', // generated ethereal user
            pass: 'Ar_0785306898' // generated ethereal password
        }
    });

    // setup email data with unicode symbols
   

    // send mail with defined transport object
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log('Message sent: %s', info.messageId);
    //     // Preview only available when sending through an Ethereal account
    //     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    //     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    //     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    // });
});


exports.send = (mailOptions) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        })
}



export default class Mailer {
    config = {
        from: 'onclicksell@gmail.com'
    }
    transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        tls: true,
        TLS: true,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'onclicksell@gmail.com', // generated ethereal user
            pass: 'Ar_0785306898' // generated ethereal password
        }
    })

    async Send (messageConfig) {
        const result = await this.transporter.sendMail({
            from: this.config.from,
            to: messageConfig.to,
            text: messageConfig.text
        })
        return result
    }
    
}