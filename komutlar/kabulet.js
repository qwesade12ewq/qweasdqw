const Discord = require('discord.js');
const db = require('quick.db');
const botlist  = require('../bot.js')

exports.run = async(client, message, args) => {
	if(!message.member.roles.cache.has(client.botlist.yetkili)) return message.channel.send('**Bot kabul etmek için `Yönetici` İznine sahip olmalısın!**')
  if(message.channel.id !== client.botlist.kanalyetkili) return message.channel.send(`<#${client.botlist.kanalyetkili}> sadece bu kanalda kullanabılır.`)

let botid = args[0]
let sahip = args[1]
if(!botid) return message.channel.send(`Bir kullanıcı id girmelisin.`).then(a => a.delete(20000))
if(!sahip) return message.channel.send(`Botun sahibini bilemden nasıl başvurananın botunu onaylıyacağım?`).then(a => a.delete(20000))
message.delete()
  
message.channel.send(`<@${botid}> isimli bot başarıyla onaylandı!`)
  
   message.guild.members.cache.get(botid).roles.add(client.botlist.botrol)
 message.guild.members.cache.get(sahip).roles.add(client.botlist.geliştirici)
  
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
.setDescription(`:white_check_mark:  **|**  <@${botid}> Adlı Bot Onaylandı Bot Sahip : <@${sahip}>.`)
client.channels.cache.get(client.botlist.log).send(embed)
  

}
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:['onayla'],
	permlevel: 0
};

exports.help = {
	name: "kabulet",
  description : ""
}