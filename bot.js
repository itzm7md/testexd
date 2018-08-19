client.on('message', function (message) {
    var messageParts = message.content.split(' ');

    var command = messageParts[0].toLowerCase();
    var parameters = messageParts.splice(1, messageParts.length);


    switch (command) {
        case "-join":
        if(message.guild.voiceConnection){
            message.reply('I'm Already In A Voice Connection!');
        }else if(!message.member.voiceChannel){
            message.reply('You're Not In A Voice Channel!');
        }else{
    let channel = message.member.voiceChannel;
    channel.join();
        }
            break;
case "-play":
        if(!message.guild.voiceConnection){
            message.reply('I'm Not In A Voice Channel!');
        }else{
//كود بدء الموسيقى مالك
        }
            var voiceConnection = client.voiceConnections.first();

            break;
}
});
client.login("NDgwODI3NDU0ODI3NzkwMzM3.DltkAA.OZMmjwtxoTTKomCMRcPbaC7JPRw")
