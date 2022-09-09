const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('noboss')
        .setDescription('報刀指令, 格式： /b 週目(數字)｜幾號王(1-5)｜傷害(數字)｜備註（非必要）')
        .addIntegerOption(option =>
            option.setName('cycle')
                .setDescription('週目(數字)')
                .setRequired(true)
                .setMinValue(1)
        )
        .addIntegerOption(option =>
            option.setName('boss')
                .setDescription('幾號王(1-5)')
                .setRequired(true)
                .setMinValue(1)
                .setMaxValue(5)
        )
        .addIntegerOption(option =>
            option.setName('damage')
                .setDescription('傷害(數字)')
                .setRequired(true)
                .setMinValue(0)
        )
}