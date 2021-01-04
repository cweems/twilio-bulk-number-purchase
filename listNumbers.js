require("dotenv").config();

const client = require("twilio")(
    process.env.ACCOUNT_SID,
    process.env.ACCOUNT_SECRET
);

function listNumbers() {
    client.incomingPhoneNumbers
        .list()
        .then((incomingPhoneNumbers) =>
            incomingPhoneNumbers.forEach((i) => console.log(i.phoneNumber))
        );
}

listNumbers();
