const jwt=require('jsonwebtoken');
const {SHA256}=require('crypto-js')


var data={
    password:SHA256("1234").toString(),
    name:"bob"
};

var token=jwt.sign(data,'my secret');
console.log(token);

var decoded=jwt.verify(token,'my secret');
console.log('decoded',decoded);