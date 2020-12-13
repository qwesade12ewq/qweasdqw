const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix
const db = require ('quick.db')
exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed()
.setColor('#FF0000')
.setTitle('Linkler »')
.setTimestamp()
.setDescription("**[Destek Sunucusu](https://discord.gg/Tw7kMJ9)\n[Botu Ekle](https://discord.com/api/oauth2/authorize?client_id=736252533563195393&permissions=8&scope=bot)**")
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['davetim','invite','linkler'], 
  permLevel: 0 
};

exports.help = {
  name: 'davet',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};
