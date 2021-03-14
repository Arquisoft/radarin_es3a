const express = require("express")
const User = require("./models/users")
const router = express.Router()

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

router.get("/users/:webId", async (req, res) => {
    var webId = req.params.webId;
    let user = await User.findOne({ webId: webId });
    res.send(user);
});

router.post("/users/update", async (req, res) => {
    let webId = req.body.webId;
    let location = req.body.location;

    let user = await User.findOne({ webId: webId });
    if(!user)
        res.send({error:"Error: This user is not registered"});
    else {
        user.location = location;
        await user.save();
        res.send(user);
    }
});

module.exports = router