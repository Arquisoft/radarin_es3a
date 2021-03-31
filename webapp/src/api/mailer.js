const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'Radarin.info@gmail.com',
		pass: 'Radarin2021'
	}
});

let mailDetails = {
	from: 'Radarin.info@gmail.com',
	to: 'luigifog@gmail.com',
	subject: 'Test mail',
	text: 'Node.js testing mail for GeeksforGeeks'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
	console.log("sending");
	if(err) {
		console.log('Error Occurs');
	} else {
		console.log('Email sent successfully');
	}
});

