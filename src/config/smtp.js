const CryptoJS = require("crypto-js");
require('dotenv').config();

function decryptPass() {
    let decrypted = CryptoJS.AES.decrypt("U2FsdGVkX1/U1jxAHL2nITJRkMPFqHKFii4Xb8Rqqcs=", process.env.KEY).toString(CryptoJS.enc.Utf8);

    return decrypted;
}

module.exports = {
    host: "smtp.gmail.com",
    port: 587,
    user: "user@mail.com", //Email responsável por enviar as mensagens
    pass: decryptPass()
}
