const jwt = require("jsonwebtoken");

function verify (req, res, next) {
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.REACT_APP_SECRET_KEY, (err, user)=> {
            if(err)  return res.status(403).json("Your token's not valid!");
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("You are not authenticated!");
    }
}

module.exports = verify;