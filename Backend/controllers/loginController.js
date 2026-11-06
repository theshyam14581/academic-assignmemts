
const Signup = require('../models/signup');
const bcrypt = require('bcryptjs');

const loginController = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    message: "Email and password are required."
                });
            }

            const user = await Signup.findOne({ email });

            if (!user) {
                return res.status(401).json({
                    message: "Invalid email or password."
                });
            }

            const isMatch = await bcrypt.compare(
                password,
                user.password
            );

            if (!isMatch) {
                return res.status(401).json({
                    message: "Invalid email or password."
                });
            }

            res.status(200).json({
                message: "Login successful!",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }
            });

        } catch (error) {
            console.log(error);

            res.status(500).json({
                message: "Internal server error."
            });
        }
    }
};

module.exports = loginController;
