const jwt = require("jsonwebtoken");


token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2FsdHVzLUdlbmVyamV0IiwidXNlcm5hbWUiOiJHZW5lcmpldC11c2VybmFtZSIsImFkbWluIjoiWWVzIGhlIGlzIGFkbWluLCBidXQgQUktbWFjaGluZSBkb2VzIHRoZSBqb2IgYmVoYWxmIG9mIGhpbS4gR2FsdHVzIGp1c3QgcmVsYXhlcyBhbmQgdHJhdmVscyB1c3VhbGx5IiwiX2lkIjoiMSIsImlhdCI6MTY1NTg4ODExMSwiZXhwIjoxNjU1OTc0NTExfQ.8nY64d-zxA3TW5bXgwKO4V95qNV4uPkTe5w0XjpG6nc"

// =============================
// function checkToken() {
//     jwt.verify(token, "MiniiSECRET")
//   }

jwt.verify(token, "MiniiSECRET", (err, authData) => {
    if(err) {
        console.log("JWT ERROR");
    } else {
        console.log("JWT CHECKED RESULT: ", authData);
    }
})

// const myToken = checkToken()

// console.log("CHECKING JWT... RESULT is -----> ", myToken);