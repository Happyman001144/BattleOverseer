const Discord = require("discord.js");
const config = require("../Configuration/config.json");

module.exports = async(bot, msg, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setDescription(`:ping_pong: **${bot.user.username}** v${config.version} by GamingWay#1890, serving ${bot.users.size} users`)
        .setFooter(`${bot.user.username} v${config.version}`)
        .setColor(0x00ff05)

    msg.channel.send(embed)
}