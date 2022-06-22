const jwt = require("jsonwebtoken");
// import jwt from 'jsonwebtoken'

// create token

// function generateToken(user) {
//     //1. Dont use password and other sensitive fields
//     //2. Use fields that are useful in other parts of the     
//     //app/collections/models
//     var u = {
//      name: user.name,
//      username: user.username,
//      admin: user.admin,
//      _id: user._id.toString(),
//      image: user.image
//     };
//     return token = jwt.sign(u, process.env.JWT_SECRET, {
//        expiresIn: 60 * 60 * 24 // expires in 24 hours
//     });
//   }

// =============================
function generateToken() {
    //1. Dont use password and other sensitive fields
    //2. Use fields that are useful in other parts of the     
    //app/collections/models
    var u = {
     name: "Galtus-Generjet",
     username: "Generjet-username",
     admin: "Yes he is admin, but AI-machine does the job behalf of him. Galtus just relaxes and travels usually",
     _id: "1"
    };
    return token = jwt.sign(u, "MiniiSECRET", {
       expiresIn: 60 * 60 * 24 // expires in 24 hours
    });
  }

const myToken = generateToken()

console.log("JWT is -----> ", myToken);