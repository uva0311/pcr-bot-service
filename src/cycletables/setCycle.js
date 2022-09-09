exports.setCycle = function (list, cycle) {
    let maxHP = []

    if (cycle <= 10) {
        maxHP = [600, 800, 1000, 1200, 1500]
    } else if (cycle >= 11 && cycle <= 30) {
        maxHP = [1200, 1400, 1700, 1900, 2200]
    } else if (cycle >= 31 && cycle <= 38) {
        maxHP = [2200, 2300, 2700, 2900, 3100]
    } else {
        maxHP = [10500, 11000, 12500, 14000, 15000]
    }

    list.push([
        [],
        [],
        [],
        [],
        [],
        maxHP
    ]);

    return list
}