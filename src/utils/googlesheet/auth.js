const { google } = require('googleapis')

exports.auth = async function () {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: "credentials.json",
            scopes: "https://www.googleapis.com/auth/spreadsheets"
        })
        // Auth client object
        const client = auth.getClient()
        return client
    } catch (err) {
        console.error(err)
    }
}
