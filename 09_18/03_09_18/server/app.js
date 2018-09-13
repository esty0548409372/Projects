const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require("body-parser");
var cors = require('cors');

const app = express();
const basePath = path.join(__dirname + "/dist");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get(`/`, (req, res) => {
    let linkList = "";
    let resPage = fs.readFileSync("links.html", "utf-8");
    console.log(resPage);
    fs.readdir(basePath, (err, files) => {
        files.forEach((file) => {
            linkList += `<li><a href="/${file}" target="blank">${file}</a></li>`;
        })
        res.send(resPage.replace("placeHolder", linkList));
    });

});

fs.readdir(basePath, (err, files) => {
    files.forEach((file) => {
        app.use(express.static(`${basePath}/${file}`));
        app.get(`/${file}`, (req, res) => {
            res.sendFile(`${basePath}/${file}/index.html`);
        });
    })
});

// app.post("/api/user", (req, res) => {
//     let currentList = require("./user.json");
//     chekValidation(req.body);
//     currentList.push(req.body);
//     fs.writeFileSync("user.json", JSON.stringify(currentList));
//     res.status(201).send(JSON.stringify(currentList));
// });

app.post("/api/user", (req, res) => {
    let currentList = require("./user.json");
    console.log(req.body);
    if (chekValidation(req.body)) {
        currentList.push(req.body);
        fs.writeFileSync("user.json", JSON.stringify(currentList));
        res.status(201).send(JSON.stringify(currentList));
    }
    else res.status(401).send();
})
// function chekValidation(person) {

//     console.log(person["firstName"])
//     if (person["firstName"].length < 2 || person["firstName"].length > 15)
//         return false;
//     console.log(person["lastName"])
//     if (person["lastName"].length < 2 || person["lastName"].length > 15)
//         return false;
//     console.log(person["usrName"])
//     if (person["usrName"].length < 2 || person["usrName"].length > 15)
//         return false;
//     console.log(person["password"])
//     if (person["password"].length < 5 || person["password"].length > 10&&person["password"].)
//         return false;

// };

//chek login to client of book store
app.post("/api/loginBookStore", (req, res) => {
    console.log(req.body);
    // console.log("userLogin:"+userLogin);
    // currentList.push(req.body);
    // fs.writeFileSync("user.json", JSON.stringify(currentList));
    res.status(201).send(JSON.stringify(req.body));
});

//add user from book-store project
app.post("/api/registerBookStore", (req, res) => {
    let currentList = require("./user.json");
    console.log(req.body);
    currentList.push(req.body);
    fs.writeFileSync("user.json", JSON.stringify(currentList));
    res.status(201).send(JSON.stringify(currentList));
})

let listCountries = require("./countries.json");

function chekValidationBookStore(person) {

    console.log(person["id"]);
    console.log(legalTz(person["id"]))
    if (!legalTz(person["id"]))
        return false;
    console.log(person["age"])
    if (person["age"] > 120 || person["age"] < 0)
        return false;
    console.log(person["name"])
    if (person["name"].length < 3 || person["name"].length > 15)
        return false;
    console.log(typeof JSON.parse(person["isMale"]))
    if (typeof JSON.parse(person["isMale"]) != "boolean")
        return false;
    console.log(person["country"])
    if (!(listCountries.includes(person["country"])))
        return false;
    return true;
};

let legalTz = (tz) => {
    let total = 0;
    for (i = 0; i < 9; i++) {
        let x = (((i % 2) + 1) * tz.charAt(i));
        total += Math.floor(x / 10) + x % 10;
    }
    return (total % 10 == 0);
};

const port = process.env.PORT || 3500;
app.listen(port, () => { console.log(`OK`); });

// curl - v - X POST - H "Content-type: application/json" - d "{\"id\":\"123456789\", \"age\":\"20\", \"name\":\"ivgy\", \"isMale\":\"false\", \"country\":\"Afghanistan\" }" http://localhost:3500/api/user
// curl -v -X POST -H "Content-type: application/json" -d "{\"id\":\"207322579\", \"age\":\"12\",\"name\":\"malky\", \"isMale\":\"true\",\"countries\":\"Israel\" }" http://localhost:3500/api/user
// \"name\":\"malky\", \"isMale\":\"true\",\"countries\":\"Israel\" }" http://localhost:3500/api/user\"Id\":\"207322579\",\"Id\":\"207322579\",
// curl -v -X POST -H "Content-type: application/json" -d "{\"id\":\"206781049\", \"age\":\"20\",\"name\":\"esty\", \"isMale\":\"false\",\"country\":\"Israel\" }" http://localhost:3500/api/user