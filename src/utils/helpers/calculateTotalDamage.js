exports.calculateTotalDamage = function (realCycle, boss, list) {
    return list[realCycle][boss - 1].reduce((total, list) => {
        return total + list.damage
    }, 0)
}