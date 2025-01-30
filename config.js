const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("27848444234")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/excelottah6/IZUKU-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '27848444234'
global.devs = '27848444234';
global.website = 'https://github.com/excelottah6/IZUKU-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'IZUKU 𝐁𝐨𝐭' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'excel' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'IZUKU;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0xhaCtkS1hEWjQvY2RaVTJVQnU1ZVgzd2htMHluRUVCRGJnckF1RU8xaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE9YRGJCdW05dTNYV0tpSGtKMVFHOVV2WEVjKzVXd2F6YUhyK1ZzOVdXST0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRmtuUzBuWFJLdzFXbXc4OVZremo2LzNZcmhYUEhWR3p4ZFRsNnZrTjMwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzbklBYytqV0ZMSEYxR3lCL3FzN0h2YURKczVlQU9MM3h1ZTBrRmxKSXdVPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZEZjd0TXhyeWFpL0Z4d3NRL1AxZzFiQkFrVlNEMmxadTViOWJ4ZHNIVUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlEzVzVVSmJlZGkrVTQxb0h6aURQWEFPUkl3b1RPOGt5TEFLNFFUWVVsbWM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjemZJclBwTlExZmRuR1grTDFxQzFoYmg4WVlFMGVaZUdaMnZYRFdHRmsyQzREWE9lOUpqQ3NBSnlTNnhWdFBLazByN0pXUmRpR2JHOGM5cDF1MTRqdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjUxLCJhZHZTZWNyZXRLZXkiOiJCQ0xBTU50dk9lalh3VnlZQjB6bEwwOFltcGtZbWc1ZUFOQ3FFOTdoQnV3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5WmVjY2hLdVI4V1pGcDR2LXVVOTVBIiwicGhvbmVJZCI6IjA0OTkyYWE2LTEwNWYtNDViOS1hYzQ3LTI1MzQxZWZiNDE1YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTOHdVTkRUdzhaTVZkUXdRODgwZStyS2xRdDQ9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJXN1lucXBHQkI1ei9QM3JuNHYzVXN2clUxMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lDQXplZ0VFSXVlN0x3R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InJsRHc5S2IxSUF0QVB3amM3QnB2S21GNlJpWXpVWlozdUU0cWlqQThXQms9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkQvNy9KUzhYOUVxcmRUUGR2dC9GQ09Pc3AwMWRsUjhWKzU1dWR2WDVoNUFEbUN0eS8xY3RSVmd3ODR6N0ZzbXRBaUE1UWs0N3BnL050bk1HY2gzQkJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI4NzBDZ0Uxb0k0YUllUGJONitGZ0hlenkvNklaRHJtWS94VmRUaEFiSS9sbEtEMm85MGI4U0JJRE0zZUsxaGNWc21FcUc5NktTd3hkSllzY1NUN1VoZz09In0sIm1lIjp7ImlkIjoiMjc4NDg0NDQyMzQ6MTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+RkvCThqrqr60g4oOq8J2QmfCdmbjwnZmz8J2ZuCDwnZCM8J2ZsPCdmbvwnZm48J2ZuuKBsMK5wrLwn4e/8J+HpuGqs/Cdhrzqr60ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc4NDg0NDQyMzQ6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTVROFBTbTlTQUxRRDhJM093YWJ5cGhla1ltTTFHV2Q3aE9Lb293UEZnWiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczODIxNTE4MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPTWkifQ==' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'excel' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'IZUKU-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['null'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hi I am ZiDi Malik' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? 'false' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'IZUKU',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
