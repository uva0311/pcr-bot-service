const { google } = require('googleapis')
const { auth } = require('./auth.js')
const { requestContext } = require('./requestContext.js')
const sheets = google.sheets('v4')

exports.batchGetGoogleSheet = async function (targetSheet, targetRange) {
    const authClient = await auth()
    const request = requestContext('batchGet', authClient, targetSheet, targetRange)

    try {
        return (await sheets.spreadsheets.values.batchGet(request)).data.valueRanges[0].values
    } catch (err) {
        console.error(err)
    }
}