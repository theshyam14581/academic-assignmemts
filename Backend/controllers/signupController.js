const Signup = require("../models/signup");
const bcrypt = require("bcryptjs");

const signupController = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    try {
        // Check if the email already exists
        const existingUser = await Signup.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Passwords do not match"
            });
        }

        
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create the new user
        const newUser = await Signup.create({
            name,
            email,
            password:hashedPassword, // You should hash the password before saving
            confirmPassword:hashedPassword // Hash the confirm password as well
        });
        res.status(201).json({
            message: "User created successfully",
            data: newUser   
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating user",
            error: error.message
        });
    }
};

module.exports = signupController;