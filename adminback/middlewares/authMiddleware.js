const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
    try{
       /* get token from header "react - userend axiosInstance" */
       const token = req.header("authorization")?.split(" ")[1];
       const decryptedToken = jwt.verify(token, process.env.jwt_secret_key);
       req.body.userId = decryptedToken.userId;
       next();
    } catch(error) {
        res.send({
            success: false,
            message: "this is the place of error",
        });
    }
};