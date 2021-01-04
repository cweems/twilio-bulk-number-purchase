require('dotenv').config();

const client = require('twilio')(process.env.ACCOUNT_SID, process.env.ACCOUNT_SECRET);

const webhookUrl = process.argv.slice(2)[0];
const webhookType = process.argv.slice(2)[1];

if (webhookType !== "smsUrl" || webhookType !== "voiceUrl") {
    console.log('Invalid webhook type. Use either smsUrl or voiceUrl (case sensistive)');
    return;
}

console.log(webhookUrl)

function updateNumber(numberSid) {
    console.log(numberSid);
    console.log(`Updating ${numberSid}`);
    client.incomingPhoneNumbers(numberSid)
        .update({
            [webhookType]: webhookUrl
        });
}

client.incomingPhoneNumbers
    .list()
    .then(incomingPhoneNumbers => incomingPhoneNumbers.forEach(i => updateNumber(i.sid)));