

const Telegraf = require('telegraf');
const bot = new Telegraf('910990883:AAGohZwOo6ztNHU5GkPbdAram9C9beyrWqA');
const axios = require('axios');
let intIdx;
bot.start(ctx =>{
	ctx.reply(`Welcome to COVID 19 Tracker India
This bot helps you to get Instant 
data of affected regions in India

Hit /help command to know more details.
`);
});

bot.help((ctx) => {
	ctx.reply(`To display all states of india, 
hit /states command
To get regular update about tamilnadu for every 5 hours 
hit /TN command`);
})

bot.command('say',(ctx) =>{
	//getDistrictData("Andaman and Nicobar Islands");
	const msg=ctx.message.text;
	const msgArray=msg.split(' ');
	msgArray.shift();
	const newMsg=msgArray.join(' ');
	ctx.reply(newMsg);
})



bot.command('dogPhoto',(ctx) => {
	const dogURL = 'https://dog.ceo/api/breeds/image/random';
	axios.get(dogURL)
	  .then((res)=>{
		ctx.replyWithPhoto(res.data.message);
	})
});




//reply markup
bot.command('states',(ctx) => {
	 getStates()
	.then((stateList) => {
		 ctx.telegram.sendMessage(ctx.chat.id,'Choose a state',
	    {  
			 reply_markup: JSON.stringify({
            inline_keyboard: stateList.map((name) => ([{
                text: name,
                callback_data: String(name),
            }])),
       })
		
	  })
		 
	 })	
	
})

//Statewise callback function

bot.action('Maharashtra',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	
	
	
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-MH"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
	
	
	//setInterval(getData, 5000,stateName); 
})

bot.action('Gujarat',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-GJ"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})

bot.action('Delhi',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-DL"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})

bot.action('Tamil Nadu',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-TN"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})

bot.action('Rajasthan',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-RJ"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})

bot.action('Madhya Pradesh',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-MP"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})

bot.action('Uttar Pradesh',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-UP"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})

bot.action('Andhra Pradesh',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-AP"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})

bot.action('Punjab',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-PB"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})

bot.action('West Bengal',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-WB"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})

bot.action('Telangana',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-TG"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Jammu and Kashmir',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-JK"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})

bot.action('Karnataka',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-KA"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})

bot.action('Gujarat',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-GJ"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Haryana',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-HR"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Bihar',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-BR"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Kerala',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-KL"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Odisha',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-OR"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Chandigarh',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-CH"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Jharkhand',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-JH"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Tripura',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-TR"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Uttarakhand',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-UT"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Chhattisgarh',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-CT"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Assam',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-AS"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Himachal Pradesh',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-HP"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Ladakh',(ctx) => {
ctx.deleteMessage();
let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-LA"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Andaman and Nicobar Islands',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-AN"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Meghalaya',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-ML"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Puducherry',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-PY"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Goa',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-GA"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Manipur',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Mizoram',(ctx) => {
ctx.deleteMessage();
let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-MN"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Arunachal Pradesh',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-AP"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Dadra and Nagar Haveli and Daman and Diu',(ctx) => {
	ctx.deleteMessage();
	 let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-DN"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})

bot.action('Nagaland',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})


bot.action('Daman and Diu',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-DN"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})

bot.action('Lakshadweep',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 
				 [ {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})

bot.action('Sikkim',(ctx) => {
	ctx.deleteMessage();
	let stateName = ctx.match;
	getData(stateName)
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 
				  [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
})



//Go back callback

bot.action('go-back',(ctx) => {
	//ctx.deleteMessage();
	getStates()
	.then((stateList) => {
		 ctx.telegram.sendMessage(ctx.chat.id,'Choose a state',
	      {  
			 reply_markup: JSON.stringify({
            inline_keyboard: stateList.map((name) => ([{
                text: name,
                callback_data: String(name),
            }])),
         })
		
	  })
		 
   })	
	
})


bot.action('district-status-AN',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Andaman and Nicobar Islands')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-AP',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Andhra Pradesh')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-AR',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Arunachal Pradesh')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-AS',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Assam')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-BR',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Bihar')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-CH',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Chandigarh')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-CT',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Chhattisgarh')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-DL',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Delhi')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})


bot.action('district-status-DN',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Dadra and Nagar Haveli and Daman and Diu')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})


bot.action('district-status-GA',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Goa')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})


bot.action('district-status-GJ',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Gujarat')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})


bot.action('district-status-HP',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Himachal Pradesh')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})


bot.action('district-status-HR',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Haryana')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})


bot.action('district-status-JH',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Jharkhand')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})


bot.action('district-status-JK',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Jammu and Kashmir')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})


bot.action('district-status-KA',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Karnataka')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})


bot.action('district-status-KL',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Kerala')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})


bot.action('district-status-LA',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Ladakh')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})


bot.action('district-status-MH',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Maharashtra')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-ML',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Meghalaya')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-MN',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Manipur')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-MP',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Madhya Pradesh')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-ML',(ctx) => {
	ctx.deleteMessage();
	getDistrictData('Meghalaya')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-MZ',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Mizoram')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-OR',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Odisha')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-PB',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Punjab')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-PY',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Puducherry')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-RJ',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Rajasthan')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-TG',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Telangana')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})


bot.action('district-status-TN',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Tamil Nadu')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-TR',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Tripura')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})


bot.action('district-status-UP',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Uttar Pradesh')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-UT',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('Uttarakhand')
	.then((districtsData) => {
		ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})
		 
   })	
	
})

bot.action('district-status-WB',(ctx) => {
	//ctx.deleteMessage();
	getDistrictData('West Bengal')
	.then((districtsData) => {
		//ctx.reply('District    |    Conf    |  Rec.   | Died  ');
		 ctx.telegram.sendMessage(ctx.chat.id,districtsData,
	      {
			 reply_markup: {
                inline_keyboard: [
                 [{text: "Go back to states", callback_data: "go-back"}]      
             ]
	       }, parse_mode: "HTML"
		})
		 
   })	
	
})

//SetInterval states
bot.command('TN',(ctx) => {
	if (intIdx) clearInterval(intIdx);
	//ctx.deleteMessage();
	getData('Tamil Nadu')
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
	inline_keyboard: [
	[{text: "District-wise status", callback_data: "district-status-TN"},
				  {text: "Go back to states", callback_data: "go-back"}]      
	]	
	       }
		})	 
	 })
	intIdx = setInterval(() => {
	getData('Tamil Nadu')
	.then((result) => {
		ctx.telegram.sendMessage(ctx.chat.id,result,
			{
			 reply_markup: {
                inline_keyboard: [
                 [{text: "District-wise status", callback_data: "district-status-TN"},
				  {text: "Go back to states", callback_data: "go-back"}]      
             ]	
	       }
		})	 
	 })
	},21600000);
	
})



async function getStates(){
	const indiaURL = 'https://api.covid19india.org/data.json';
	let stateList=[];
	let res = await axios.get(indiaURL);
	  
		let stateWise = res.data.statewise;
		//console.log(stateWise);
		 stateList = stateWise.map(e => {
			//console.log(e.state);
			 return e.state;
		})
		 // console.log(stateList);
	return stateList;
		   
	
}


async function getData(stateName){
	//getStates();
	console.log(stateName);
	 const indiaURL = 'https://api.covid19india.org/data.json';
	 let res = await axios.get(indiaURL)
	  
		let stateList = res.data.statewise;
		
		let data = stateList.filter(e => {
			return e.state === stateName
		})
		 
		let cases = data[0];
		let results = `***COVID -19 - ${cases.state} Status***
        Active Cases = ${cases.active}
	    Confirmed Cases = ${cases.confirmed}
	    Recovered Cases = ${cases.recovered}
        Deaths Cases = ${cases.deaths}    
        *********************************` 
		//ctx.reply(results);
		//console.log(results);
	
	return results;
}

 // function getDistrictData(stateName){
	
 // const distURL = 'https://api.covid19india.org/state_district_wise.json';
 // // console.log("stateName:"+stateName);
 // //stateName= JSON.parse(stateName);
 // let allowed=[];
 // allowed.push(stateName);
 // axios.get(distURL)
 // .then((res) =>{
 // let result= res.data;
 // let stateData = Object.keys(result)
 // .filter(key => allowed.includes(key))
 // .reduce((obj, key) => {
 // return{
 // ...obj,
 // [key]: result[key]
 // };
 // }, {});
 // console.log(stateData);
 // //let stateData = Object.keys(result).filter()
 // //console.log(stateData);
		
		
		
		
		
		  
 // })

async function getDistrictData(stateName){
	const distURL = 'https://api.covid19india.org/v2/state_district_wise.json';
	let res = await axios.get(distURL)
     let display="";
	//let displayArray=any;
		let results = res.data;
		let stateData = results
		    .filter((ele) => {
			return ele.state === stateName;
		})
		let array = stateData[0].districtData;
	//console.log("array:"+array);
		let max_length = Math.max(...array.map(el => el.district.length));
	console.log(max_length);

		stateData[0].districtData.forEach((Eachdistrict) => {
			display= display+((Eachdistrict.district) + '  |  Conf-'+(Eachdistrict.confirmed)+ '  |  Recv-'+(Eachdistrict.recovered) + '  |  Died-' +(Eachdistrict.deceased)+'  |\n');
    //  display= display + ` ${Eachdistrict.district}|${Eachdistrict.confirmed}\n*`
			///display = "<code>Hello</code>";
   	})
	
	
	return display;
	
}

	  
	
bot.launch();
