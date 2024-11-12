const userModel =require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;

// Hash the user password
async function getHashPassword(password){
    const saltRounds = 3;
    const hashPassword = await bcrypt.hash(password,saltRounds);
    return hashPassword;
}

// Signup
exports.register = async(req,res) => {
    try {
        const {name,email,password} = req.body;
        const hashPassword = await getHashPassword(password);

        // Return correc error if user is already registered
        const user = await userModel.findOne({
            email : email
        })

        if(user){
            return res.status(400).json({error:"User is already registered!"});
        }

        await userModel.create({
            name : name,
            email : email,
            password : hashPassword
        });

        return res.status(200).json({message:"User created!"});

    } catch(error){
        return res.status(400).json({error:"Error creating user"});
    }
}

// Sign In
exports.signin = async(req,res) => {
    try {
        const {email,password} = req.body;
        const hashPassword = getHashPassword(password);
        const user = await userModel.findOne({
            email : email
        });

        if(!user){
            return res.status(400).json({error:"User is not registered"});
        }

        if(user.password===hashPassword){
            const token = jwt.sign({email : user.email},JWT_USER_PASSWORD);
            return res.status(200).json({error:""})
        }


    } catch(error){
        return res.status(400).json({error:"Error logging in"});
    }
}


// Update Password