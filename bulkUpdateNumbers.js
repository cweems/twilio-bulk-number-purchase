require('dotenv').config();

const client = require('twilio')(process.env.ACCOUNT_SID, process.env.ACCOUNT_SECRET);

const webhookUrl = process.argv.slice(2)[0];

console.log(webhookUrl)

function updateNumber(numberSid) {
    console.log(numberSid);
    console.log(`Updating ${numberSid}`);
    client.incomingPhoneNumbers(numberSid)
        .update({
            voiceUrl: webhookUrl
        });
}

client.incomingPhoneNumbers
    .list()
    .then(incomingPhoneNumbers => incomingPhoneNumbers.forEach(i => updateNumber(i.sid)));