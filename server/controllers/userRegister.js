import User from "../models/userModels.js";
import asyncHandler from 'express-async-handler';
import generateToken from "../utils/generateToken.js";

const userRegister = asyncHandler(async (req, res) => {
    const { email, password, name } = await req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400)
        throw new Error("user is already present")
    }
    const user = await User.create({
        email,
        name,
        password,
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            email: user.email,
            name: user.name,
            token: generateToken(user._id)
        })
    } else {
        res.status(400).json("error occured");
    }
});

const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = await req.body;
    const user = await User.findOne({ email });


    if (user && await user.matchPassword(password)) {
        res.status(201).json({
            _id: user._id,
            email: user.email,
            name: user.name,
            password: user.password,
            token: generateToken(user._id)
        })
    } else {
        res.status(400).json("Invalid email or password");
    }
});
export { userRegister, userLogin };