var nodemailer = require('nodemailer');
// email sender function
exports.sendEmail = function(req, res){
// Definimos el transporter
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'radarin.info@gmail.com',
            pass: 'Radarin2021'
        }
    });
// Definimos el email
var mailOptions = {
    from: "radarin.info@gmail.com>",
    to: 'luigifog@gmail.com',
    subject: 'Prueba',
    text: 'Contenido del email'
};
// Enviamos el email
transporter.sendMail(mailOptions, function(error, info){
    console.log("eyyy");
    if (error){
        console.log("error");
        //res.send(500, error.message);
    } else {
        console.log("Email sent");
        res.status(200).jsonp(req.body);
    }
});
};