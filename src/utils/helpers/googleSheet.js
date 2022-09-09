const { batchGetGoogleSheet } = require('../googlesheet/batchGetRequest.js') // call batch GET request 
const { batchUpdateGoogleSheet } = require('../googlesheet/batchUpdateRequest.js') // call batch POST request

exports.updateRecordSheet = async function () {
    let updateRange = 0
    // submit a  bacth GET request to retrieve cells array
    const getResponse = await batchGetGoogleSheet('bot', 'A2:E6')

    console.log(getResponse)

    if (getResponse) {
        // update request range by looping through the column A, set the empty cell as the targeted range to post message
        for (step = 0; step < getResponse.length; step += 5) {
            if (getResponse[step][0]) {
                updateRange += 5
            } else {
                break
            }
        }
    }

    // submit a batch POST request to ship discord bot message to google sheet cells
    await batchUpdateGoogleSheet('bot', `A${2 + updateRange}:E${6 + updateRange}`, getResponse)
}