exports.requestContext = function (type, auth, targetSheet, targetRange) {
    let range = `${targetSheet}!${targetRange}`
    let context = {
        auth: auth,
        spreadsheetId: '1I-eMpsKOE9VXEkwi96n4AqZZ6fpvp1QFG5NP2d9VuZM',
    }

    if (type == 'get') {
        context.range = range
    }

    if (type == 'batchGet') {
        context.ranges = [range]
    }

    if (type == 'update') {
        context.range = range
        context.valueInputOption = 'USER_ENTERED'
        context.resource = {}
    }

    if (type == 'batchUpdate') {
        context.resource = {
            valueInputOption: 'USER_ENTERED',
            data: [
                {
                    range: range,
                    majorDimension: "ROWS",
                    values: []
                }
            ]
        }
    }

    return context
}