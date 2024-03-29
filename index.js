const express = require('express');
const app = express();


const port = 1212;
const db = require('./config/mongoose.js')

//Used for Session Cookie
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy.js')


app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize());

// Use express router
app.use('/', require('./routes/index'))

app.listen(port, function (error) {
    if (error) {
        console.log(`Error in running the Server. Error is : ${error}`);
        return;
    }
    console.log(`Server is up and running on the port: ${port}`);
})
