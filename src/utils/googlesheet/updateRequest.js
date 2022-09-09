const { google } = require('googleapis')
const { auth } = require('./auth.js')
const { requestContext } = require('./requestContext.js')
const sheets = google.sheets('v4')

exports.updateGoogleSheet = async function (targetSheet, targetRange, targetCells) {
    const authClient = await auth()
    const request = requestContext('update', authClient, targetSheet, targetRange)

    request.resource.values = targetCells

    try {
        await sheets.spreadsheets.values.update(request)
    } catch (err) {
        console.error(err)
    }
}