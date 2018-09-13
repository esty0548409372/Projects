const mongoose = require('mongoose');//use with the package that we took

//Create model:
module.exports = {
    userModel: {
        id: String,
        name: String,
        password: String,
        age: Number,
        isMale: Boolean,
        visitedCountries: Array
    }
}