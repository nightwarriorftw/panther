const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msg = {
    to: 'trigger@recipe.ifttt.com',
    from: 'csrportalindia@gmail.com',
    subject: '#IFTTT',
    text: 'Smart India Hackathon Jitna hai',
    html: 'Smart India Hackathon 2019 !!!'
};

sgMail.send(msg);
