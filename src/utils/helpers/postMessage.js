const { getGoogleSheet } = require('../googlesheet/getRequest.js') // call GET request 
const { updateGoogleSheet } = require('../googlesheet/updateRequest.js') // call POST request

exports.postMessage = async function (targetSheet, discordMessage) {
    let targetCells
    let updateRange = 0
    // submit a GET request to retrieve cells array
    const getResponse = await getGoogleSheet(targetSheet, 'A2:A')

    // The response format is the following:
    // { range: 'bot!A2:A999', majorDimension: 'ROWS' }
    // any empty cells will be omitted in the response. and no "values" property exists in the response
    if (getResponse.values) {
        // update request range by looping through the column A, set the empty cell as the targeted range to post message
        for (updateRange = 0; updateRange < getResponse.values.length; updateRange++) {
            if (!getResponse.values[updateRange][0]) break
        }
    }

    targetCells = [[`${discordMessage}`]]

    // submit a POST request to ship discord bot message to google sheet cells
    await updateGoogleSheet(targetSheet, `A${2 + updateRange}`, targetCells)
}




