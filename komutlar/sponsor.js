const Discord = require("discord.js");

const db = require("quick.db");

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()

    .setColor("BLUE")

    .setDescription(
"https://discord.gg/56FahRdH46"
    )

    .setFooter(`${client.user.username}`, client.user.avatarURL)

    .setTimestamp();

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0
};

exports.help = {
  name: "sponsor",

  description: "Yardım kategorilerini gösterir.",

  usage: "yapımcı"
};
