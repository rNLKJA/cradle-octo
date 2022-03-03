import * as nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER_ACCOUNT,
        pass: process.env.GMAIL_USER_PASS
    }
});

/**
 * Send Email
 * This function will send email to user
 * @param userEmail
 * @param mailTitle
 * @param content
 */
export const sendMail = (userEmail: string, mailTitle: string, content: string) => {

    // verify the connection with the gmail
    //transporter.verify().then(console.log).catch(console.error)

    // mail body
    let mailBody = {
        from: process.env.GMAIL_USER_ACCOUNT, // login user must equel to this user
        to: userEmail,
        subject: mailTitle,
        html: content
    };

    //send email
    transporter.sendMail(mailBody, (error:Error, info:nodemailer.SentMessageInfo) => {
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
}