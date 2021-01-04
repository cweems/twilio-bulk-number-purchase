# Bulk Number Purchase and Update

Simple helper scripts for buying and bulk updating Twilio Phone Numbers. Features include:

-   Specify an area code and quantity of phone numbers to purchase.
-   Specify a URL and webhook type (SMS or Voice) to bulk-update.

For more details on how to implement custom API calls, see the [Twilio Phone Numbers API](https://www.twilio.com/docs/phone-numbers).

## Setup

Run the following shell commands to set up the script:

```shell
$ git clone git@github.com:cweems/twilio-bulk-number-purchase.git
$ cd twilio-bulk-number-purchase
$ npm install
$ cp .env.example .env
```

Then, replace env vars in .env with Twilio Account credentials.

## Usage

There are three node.js scripts available in this respository:

### buyNumbers.js

Buy multiple Twilio Phone Numbers at once:

```shell
$ node buyNumbers.js [AREA CODE] [QUANTITY]

# Example:
$ node buyNumbers.js 413 20
```

### bulkUpdateNumbers.js

Bulk Update Phone Numbers:

```shell
$ node bulkUpdateNumbers.js [WEBHOOK URL] [WEBHOOK TYPE (smsUrl / voiceUrl)]

# Example:
$ node bulkUpdateNumbers.js https://webhooks.twilio.com/v1/Accounts/ACXXXXXXXXXXX/Flows/FWXXXXXXXXXXX smsUrl
```

### listNumbers.js

List all active phone numbers present in your Twilio Account.

```shell
$ node listNumbers.js
```
