const fs = require('fs')
const chalk = require('chalk')

module.exports = {
  SESSION_ID: 'QUEENELISA;;;==QUC1UVSJTSHp0SSF0bqB3VK9GbO1ETItUZ2d2YtlmcRl2dK5UZ3M1NFlzbjEVYMh3QVVUQpwd=83869086749',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hello @name [ And @gname @members Number of Members ] I am Alive Now !*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`,
  ALIVE_MEDIA: 'https://github.com/GayaGihana/GayaGihana/blob/main/GHOST.jpg',
  MONGODB_URL: 'mongodb+srv://Gihaa:324s45d@cluster0.alcex.mongodb.net/', 
  Pc: '✔',
  LANGUAGE: 'SI',
  PORT: 3000,
  BOT_NAME: '😉',
  OWNER_NAME: 'GG',
  OWNER_NUMBER: '000',
  SUDO: '000',
  WORK_TYPE: 'public',
  WORK_MODE: 'group',
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '©',
  STICKER_AUTHOR: 'Qᴜᴇᴇɴ ᴇʟɪꜱᴀ',
  STICKER_PACK: 'ᴍʀ ɴɪᴍᴀ ᴏꜰᴄ',
  REMOVE_BG_APIKEY: '✔lakshapana',
  MAXIMUM_FILESIZE:'80',
  OWNER_R_EMOJI: '😉',
  ALIVE_AS_GIF: false,
  AUTO_VOICE: true,
  INBOX_BLOCK: false,
  OWNER_REACT: false,
  AUTO_REACT: false,
  ONLY_PM_GROUP_MSG_SEND: false,
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: false,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: true,
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: false,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,
  BUTTON_MESSAGES: true,
  SONG_DOWNLOAD_TYPE: 'song', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'video', // video
  FB_DOWNLOAD_TYPE: 'fb', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'tt', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ My owner has activated auto inbox blocking. So you will be auto blocked after 8 seconds'
  },
  BOT_RULES:
    "*⚖️ 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
