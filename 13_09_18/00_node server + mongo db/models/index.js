const mongoose = require('mongoose');//use with the package that we took
const user = require('./user');
const country = require('./country');
//Connect to mongo db 
mongoose.connect("mongodb://localhost:27017/TravelerDB",
    (err) => {
        //if error is empty the connected successfuly
        console.log(err || "We're connected to MongoDB");
    });
    
//Create MongoDB model
module.exports = {
    User: mongoose.model("User", user.userModel),
    Country: mongoose.model("Country", country.countryModel)
}


