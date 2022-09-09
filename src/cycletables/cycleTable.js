// cycle table to print the recent 5 cycles
const { calculateTotalDamage } = require('../utils/helpers/calculateTotalDamage')

exports.cycleTable = function (list) {
    let template = ''
    let realCycle = list.length
    let displayCycles = realCycle

    // 1 - 4階 - 顯示5週目
    // 5階 - 顯示3週目
    if (realCycle <= 38) {
        // account for blank json
        // lead to send a empty table
        displayCycles = realCycle - 5 < 0 ? 0 : realCycle - 5
    } else {
        displayCycles = realCycle - 3
    }

    for (displayCycles; displayCycles < realCycle; displayCycles++) {
        // for single cycle
        let table = ''
        let header = ''
        for (let bossCounter = 0; bossCounter <= 4; bossCounter++) {
            header = `\n第${displayCycles + 1}週\n`
            // generate data for a single boss row
            let nameArray = list[displayCycles][bossCounter].map((list) => {
                if (!list.note.length) {
                    return list.name + `(${list.damage})\n`
                } else {
                    return list.name + `(${list.damage},${list.note[0]})\n`
                }
            })

            let totalDamage = calculateTotalDamage(displayCycles, bossCounter + 1, list)
            let bossHp = list[displayCycles][5][bossCounter]
            let nokoriHp = bossHp - totalDamage
            let hp = `[${nokoriHp}/${bossHp}]`
            // due to discord's text formatting, 
            // have to include the amount of space needed for display
            if (nameArray[0]) {
                table += `+ ${bossCounter + 1}王${hp}:\n- ${nameArray.join('- ')}\n`
            } else {
                table += `+ ${bossCounter + 1}王${hp}:\n`
            }

        }
        template += header + table
    }
    template = '***備註：傷害僅供參考不與遊戲連動*** ```autohotkey' + template + '```'
    return template
}

