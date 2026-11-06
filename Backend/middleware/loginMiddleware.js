const jwt = require("jsonwebtoken");

const loginMiddleware = (req, res, next) => {
    const token = req.headers.token;
    
    if (!token) {
        return res.status(401).json({ message: "Access Denied" });
    }
    const verify = jwt.verify(token, process.env.JWT_SECRET);

    req.user = verify;
       next();
};

module.exports = loginMiddleware;