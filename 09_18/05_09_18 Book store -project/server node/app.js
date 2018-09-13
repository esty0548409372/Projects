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

app.post("/api/loginBookStore", (req, res) => {
    console.log(req.body);
    let allUser = JSON.parse(JSON.stringify(require("./user.json")));
    let myUser = allUser.find(element => element['userName'] == req.body.userName && element['userPassword'] == req.body.userPassword);
    
    if (myUser)
        res.status(201).send(JSON.stringify(myUser));
    else res.status(400).send(null);
});

//add user from book-store project
app.post("/api/registerBookStore", (req, res) => {

    console.log(req.body);
    let currentList = require("./user.json");
    let myUser = currentList.find(element => element['userName'] == req.body.userName && element['userPassword'] == req.body.userPassword);
    if (myUser)
        res.status(400).send(null)
    else {
        console.log(req.body);
        currentList.push(req.body);
        fs.writeFileSync("user.json", JSON.stringify(currentList));
        res.status(201).send(JSON.stringify(currentList));
    }
})

const port = process.env.PORT || 3500;
app.listen(port, () => { console.log(`OK`); });
