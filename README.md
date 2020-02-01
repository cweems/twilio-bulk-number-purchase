# Bulk Number Purchase and Update

## Setup

Clone repository: `git clone git@github.com:cweems/twilio-bulk-number-purchase.git`

Change to folder: `cd twilio-bulk-number-purchase`

Install dependencies: `npm install`

Copy env file example to .env: `cp .env.example .env`

Replace env vars in .env with Twilio Account credentials.

## Usage

Bulk Buy Phone Numbers:

`node buyNumbers.js [AREA CODE] [QUANTITY]`

Example:`node buyNumbers.js 413 20`

Bulk Update Phone Numbers:

`node bulkUpdateNumbers.js [WEBHOOK URL]`

`node bulkUpdateNumbers.js https://webhooks.twilio.com/v1/Accounts/ACXXXXXXXXXXX/Flows/FWXXXXXXXXXXX`
