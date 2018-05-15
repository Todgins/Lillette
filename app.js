//Startup
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
	process.stdout.write(client.user.username + " Online! Logged in as " + client.user.tag + "\nEdit test");
  //console.log("Lillette Online! Logged in as " + client.user.tag);

});
//Login as BOTTOKEN from config file
client.login(config.token);
// End of startup


client.on("message", (message) => {
  // Exit and stop if no prefix OR author is a bot
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

//Set up commands rather than on msg
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

//Admin commands
  //if(message.author.id !== config.ownerID) return;
  if(command === "admin" && message.author.id == config.ownerID){
    message.channel.send("Administrator identification confirmed. \nWelcome master~<3");
  }
    //Shuts down bot process
    if(command === "exit" && message.author.id == config.ownerID){
    process.stdout.write(client.user.username + " shutting down");
	//message.channel.send(client.user.username + " shutting down");
	process.exit();
  }

  
  //Help command
    if(command === "help"){
    let text = args.slice(0).join(" ");
    message.channel.send("Sending " + text + " info to " + message.author.toString());
	//message.author.send("Here are the commands I repond to...");
	//sends info via DM to author
	message.channel.send("Wait, I'll post them here for all to see. \nThe commands I repond to are:");
	//Standard user
	message.channel.send("!say TEXTHERE, !callme, !ping, !hi and !hello");
	//Admin only
	message.channel.send("Admin only commands: \n!admin, !exit");
  }
  
   //Standard commands
  
      if (command === "doc") {
       message.channel.send("Discord doccumentation found here: https://discord.js.org/#/docs/main/stable/general/welcome");
  }

  if(command === "say"){
    let text = args.slice(0).join(" ");
    message.delete();
    message.channel.send(text);
  }
  
    if (command === "callme") {
       message.channel.send("Mention " + message.author.toString());
  }

//  if (message.content.startsWith(config.prefix + "ping")) {
//    message.channel.send("pong!");
//  }


  if (command === "ping") {
    message.channel.send("pong!");
  }

  if (message.content.startsWith("config.prefix + hi") || message.content.startsWith("config.prefix + hello")) {
    message.channel.send("Hello :3");
  }

});

//Debugging
  //client.on("error", (e) => console.error(e));
  //client.on("warn", (e) => console.warn(e));
  //client.on("debug", (e) => console.info(e));


