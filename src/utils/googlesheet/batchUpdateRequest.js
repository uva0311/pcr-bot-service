const { google } = require('googleapis')
const { auth } = require('./auth.js')
const { requestContext } = require('./requestContext.js')
const sheets = google.sheets('v4')

exports.batchUpdateGoogleSheet = async function (targetSheet, targetRange, data) {
    const authClient = await auth()
    const request = requestContext('batchUpdate', authClient, targetSheet, targetRange)

    request.resource.data[0].values = [...data]

    try {
        await sheets.spreadsheets.values.batchUpdate(request)
    } catch (err) {
        console.error(err)
    }
}