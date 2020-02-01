require('dotenv').config();

const client = require('twilio')(process.env.ACCOUNT_SID, process.env.ACCOUNT_SECRET);

const areaCode = Number(process.argv.slice(2, 3));
const quantity = Number(process.argv.slice(3, 4));

console.log(areaCode, quantity);

function buyNumber(number) {
    console.log(`Buying ${number}`)
    client.incomingPhoneNumbers
        .create({ phoneNumber: number })
        .then(incoming_phone_number => console.log(`Successfully purchased ${incoming_phone_number.sid}`));
}

function getNumbers() {
    client.availablePhoneNumbers('US')
        .local
        .list({ areaCode: areaCode, limit: quantity })
        .then(local => local.forEach(l => buyNumber(l.phoneNumber)));
}

getNumbers();