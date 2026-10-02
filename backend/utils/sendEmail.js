import nodemailer from "nodemailer"

export async function sendEmail({email, subject, message}){
    try{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            }
        })
        const mailOptions = {
            from : `"Ecommy Support" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: subject,
            html: message,
        }

        await transporter.sendMail(mailOptions)
        console.log(`Email send successfully to ${email}`);
    }
    catch(error){
        console.error(`Failed to send email to ${email} : ${error.message}`);
    }
}