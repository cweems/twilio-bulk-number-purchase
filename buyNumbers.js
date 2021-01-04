require("dotenv").config();

const client = require("twilio")(
    process.env.ACCOUNT_SID,
    process.env.ACCOUNT_SECRET
);

const areaCode = Number(process.argv.slice(2, 3));
const quantity = Number(process.argv.slice(3, 4));

console.log(`Buying ${quantity} numbers in the ${areaCode} area code.`);

function getNumbers() {
    console.log("Running GetNumbers");
    client
        .availablePhoneNumbers("US")
        .local.list({ areaCode: areaCode, limit: quantity })
        .then((local) =>
            local.forEach((l) => {
                console.log(`Found ${l}`);
                buyNumber(l.phoneNumber);
            })
        )
        .catch((err) => console.log(err));
}

function buyNumber(number) {
    console.log(`Buying ${number}`);
    client.incomingPhoneNumbers
        .create({ phoneNumber: number })
        .then((incoming_phone_number) =>
            console.log(`Successfully purchased ${incoming_phone_number.sid}`)
        )
        .catch((err) => console.log(err));
}

getNumbers();
