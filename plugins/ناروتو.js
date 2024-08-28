let handler = async (m, { conn }) => {

    const vn = [
    './media/ناروتو.mp3',
    ];
    
    let audio = vn[Math.floor(Math.random() * vn.length)];
    
  //  const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD}}, 'participant': '0@s.whatsapp.net'};
    
    
    conn.sendPresenceUpdate('recording', m.chat);
    
    conn.sendMessage(m.chat, {audio: {url: audio}, ptt: true, mimetype: 'audio/mpeg', fileName: 'audioi.mp3'}, {quoted: m});
};

// دي كلمات المساعدة والأوسمة الخاصة بالأمر
handler.help = ['notification'];
handler.tags = ['notification'];

// دي الكلمات اللي الكود هيتفاعل معاها
handler.customPrefix = /ناروتو|ناروطو|هوكاجي|ناروتوو/i;
handler.command = new RegExp;

export default handler;
