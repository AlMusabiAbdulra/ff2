let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
global.reply = {
  "key": {
    "participants": `${m.sender.split('@')[0]}`+"@s.whatsapp.net",
    "remoteJid": "status@broadcast",
    "fromMe": false
  },
  "message": {
    "contactMessage": {
      'displayName': `${m.pushName}`,
      "vcard": `BEGIN:VCARD\nVERSION:3.0\nFN:${m.pushName}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nEND:VCARD`
    }
  },
  "participant": "0@s.whatsapp.net"
}
    let message = `*˼❄️˹┊「 مرحبآ ↫ ${taguser}」*\n> اهـلًا مـعـك بـوت غـون > لـلمـساعـدة اكــتب اوامـر او شـرح\n> لإضافة البوت لقروبك اكـتب الـمـطـور\n*✧━━ • ━ 「  ✤  」 ━ • ━━✧*
\n> ❯⏐ 𝐄𝐋𝐙𝟑𝐄𝐌 𝐆𝐎𝐍 𝐁𝐎𝐓`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/26bc75e016614b21bba57.mp4','image.jpg', message, global.reply, m, { mentions: [m.sender] });
};

handler.customPrefix = /^(بوت)$/i;
handler.command = new RegExp;

export default handler;
