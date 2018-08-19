client.on('message', message => {
    if (message.content.startsWith("⫷༺public-chat༺⫸)) {
                                    var mentionned = message.mentions.users.first();
                var mentionavatar;
                  if(mentionned){
                      var mentionavatar = mentionned;
                  } else {
                      var mentionavatar = message.author;
                      
                  }
                  let bot;
                  if(message.author.bot) {
                      bot = 'Bot'
                  } else {
                      bot = 'User'
                  } 
     var EsTeKnAN = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setThumbnail(`${mentionavatar.avatarURL}`)
     .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
     .setDescription('***|▬▬▬▬▬▬▬•ஜ۩۞۩ஜ•▬▬▬▬▬▬▬|
                              :rose: ولكم منور  :rose:
|▬▬▬▬▬▬▬•ஜ۩۞۩ஜ•▬▬▬▬▬▬▬|
***')
     .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
      message.channel.sendEmbed(EsTeKnAN);
     }
   });
client.on("NDgwODI3NDU0ODI3NzkwMzM3.Dlti_w.PjlOM-Lrbd7V0LU2A7bMoUSmDjI")
