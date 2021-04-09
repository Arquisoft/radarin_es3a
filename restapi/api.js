const express = require("express")
const User = require("./models/users")
const router = express.Router()
const nodemailer = require('nodemailer');

// Get all users
router.get("/users/list", async (req, res) => {
    const users = await User.find({}).sort('-_id') //Inverse order
	res.send(users)
})

//register a new user
router.post("/users/add", async (req, res) => {
    let webId = req.body.webId;
    let location = req.body.location;
    //Check if the device is already in the db
    let user = await User.findOne({ webId: webId })
    if (user)
        res.send({error:"Error: This user is already registered"})
    else{
        user = new User({
            webId: webId,
            location: location,
        })
        await user.save()
        res.send(user)
    }
});

router.get("/users/byWebId", async (req, res) => {
    var webId = req.headers.webid;
    let user = await User.findOne({ webId: webId });
    res.send(user);
});

router.post("/users/update", async (req, res) => {
    let webId = req.body.webId;
    let location = req.body.location;

    let user = await User.findOne({ webId: webId });
    if(!user) {
        user = new User({
            webId: webId,
            location: location,
        })
        await user.save()
        res.send(user);
    } else {
        user.location = location;
        await user.save();
        res.send(user);
    }
});

router.post("/email/send", async(req, res) => {
    let destinatary = req.body.destinatary;
    let message = req.body.message;
    let subject = req.body.subject;

    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'Radarin.info@gmail.com',
            pass: 'Radarin2021'
        }
    });
    
    let mailDetails = {
        from: 'Radarin.info@gmail.com',
        to: destinatary,
        subject: subject,
        text: message
    };
    
    mailTransporter.sendMail(mailDetails, function(error, info) {
        console.log("sending");
        if(err) {
            console.log('Error Occurs');
            res.send(500, error.message);
        } else {
            console.log('Email sent successfully');
            res.status(200).jsonp(req.body);
        }
    });
});

module.exports = router