const { cycleTable } = require('./cycleTable.js')

exports.sendCycleTable = async function (list, cycleChannel) {
    let content = cycleTable(list)
    try {
        cycleChannel.messages.fetch({ limit: 1 }).then(msgSent => {
            if (msgSent.size) {
                for (const msg of msgSent) {
                    msg[1].edit(content)
                }
            } else {
                cycleChannel.send(content)
            }
        })
    } catch (err) {
        console.log(err)
    }
}