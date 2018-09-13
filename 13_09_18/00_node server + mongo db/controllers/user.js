const models = require('./../models/index');
const jwt = require('jsonwebtoken');
const { SHA256 } = require('crypto-js')

function addUserRoutes(app) {

    app.post("/register", function (request, response) {
        models.User.insertMany(request.body);
        console.log(request.body);
    });

    app.get("/users", function (request, response) {
        models.User.find({}, (err, users) => {
            response.send(users);
        })
    });
    app.post("/login", function (request, response) {
        models.User.findOne({ password: request.body.password, userName: request.body.userNamename }, (err, users) => {
            if (users) {
                console.log(request.body);
                var token = jwt.sign(request.body, 'my secret');
                console.log(token);
                // var decoded = jwt.verify(token, 'my secret');
                // console.log('decoded', decoded);
            }
            else
                response.send(404);
        })
    });
}
module.exports = { addUserRoutes };
// curl -v -X POST -H "Content-type: application/json" -d "{\"userName\":\"test\",\"password\":\"1234\"}" http://localhost:3000/login
// curl -v -X POST -H "Content-type: application/json" -d "{\"id\":\"100000000\",\"userName\":\"test\",\"password\":\"1234\",\"age\":\"20\",\"isMale\":\"true\" }" http://localhost:3000/register


