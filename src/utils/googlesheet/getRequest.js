const { google } = require('googleapis')
const { auth } = require('./auth.js')
const { requestContext } = require('./requestContext.js')
const sheets = google.sheets('v4')

exports.getGoogleSheet = async function (targetSheet, targetRange) {
    const authClient = await auth()
    const request = requestContext('get', authClient, targetSheet, targetRange)

    try {
        return (await sheets.spreadsheets.values.get(request)).data
    } catch (err) {
        console.error(err)
    }
}
