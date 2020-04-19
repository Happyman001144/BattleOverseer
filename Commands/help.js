const Discord = require("discord.js");
const config = require("../Configuration/config.json");

module.exports = async(bot, msg, args) => {
    if(!msg.member.roles.some(r=>["Staff"].includes(r.name)) ) {
        const embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setTitle(`__**HELP**__`)
        .addField(`ping`, `Ping the bot`, false)
        .addField(`about`, `About the bot`, false)
        .addField(`serverinfo`, `Info about the server`, false)
        .addField(`stats`, `View some statistics about the bot and server`, false)
        .addField(`uptime`, `How long has the bot been up?`, false)
        .addField(`profile`, `About a user's profile`, false)
        .setFooter(`You are not seeing all commands as you are not Staff in this server`)
        .setColor(0x157f87)
    
    msg.channel.send(embed)
    } else {
        const embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setTitle(`__**HELP**__`)
        .addField(`ping`, `Ping the bot`, false)
        .addField(`about`, `About the bot`, false)
        .addField(`serverinfo`, `Info about the server`, false)
        .addField(`stats`, `View some statistics about the bot and server`, false)
        .addField(`uptime`, `How long has the bot been up?`, false)
        .addField(`profile`, `About a user's profile`, false)
        .addField(`warn`, `Warn someone about something`, false)
        .addField(`kick`, `Kick the mentioned user`, false)
        .addField(`ban`, `Ban the mentioned user`, false)
        .addField(`embed`, `Make an embed to get yourself heard`)
        .setFooter(`You are viewing all commands`)
        .setColor(0x157f87)

        msg.channel.send(embed)
    }
}