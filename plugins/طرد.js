 let handler = async (m, { conn, participants, usedPrefix, command }) => {

    let developers = ['201146121794@s.whatsapp.net'];   

    let kickte = `*مــنشـن الـشـخص !*`;

    
    if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte) });

    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;


    if (developers.includes(user)) {
        return m.reply(`*❌┃ انت بتعمل اي يالا عاوز تطرد المطور انت عبيط؟ اسف يامطوري🥺*`);
    }

//حقوق العقرب اليوتيوبر ممنوع تغيير المصدر https://whatsapp.com/channel/0029VahbMZl4tRrkdpJrCv2f

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');

   
    m.reply(`*تـــم الــطرد*`);

 
    let admins = participants.filter(participant => participant.admin).map(participant => participant.id);
    let alertMessage = `*⚠️┃ اطلع برا ياحيوان ${user}*`;

    conn.sendMessage(m.chat, { text: alertMessage, mentions: admins });
}

handler.help = ['kick @user'];
handler.tags = ['group'];
handler.command = ['kick', 'طرد'];
handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;
