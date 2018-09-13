
const models = require('./../models/index')
const countryList = require('./../models/countries.json');

function addCountryRoutes(app) {

    //If the db is empty - fill it with the countryList seed
    models.Country.find({}, (err, countries) => {
        if (!countries.length)
            models.Country.insertMany(countryList, (err, res) => {
                console.log("Insert countryList success")
            })
    })

    //get all countries
    app.get("/countries", function (request, response) {
        models.Country.find({}, (err, countries) => {
            response.send(countries);
        })
    });
}
module.exports = { addCountryRoutes };
