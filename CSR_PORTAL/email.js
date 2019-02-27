const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('SG.3mowUlzITGe_vexAjAbggg.djge-Y8tce7q4tFakElloo_j5rwLRBwKiC7g-huWqfk');
const msg = {
    to: 'utkarshcomeon@gmail.com',
    from: 'mayank.singh081997@gmail.com',
    subject: 'Sending with SendGrid is fun',
    text: 'Smart India Hackathon Jitna hai',
    html: 'Email Nayi Bana lo!'
};

sgMail.send(msg);
