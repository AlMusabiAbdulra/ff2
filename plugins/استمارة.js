let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender];
  let name = conn.getName(m.sender);
  let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  let message = `❃━══✦•〘• ♾️ •〙•✦══━❃

*◈⛩️╠ بــوابــة انـفـينـتـي ╣⛩️◈*

⋄━───═◞⬪➿⬪◟═───━⋄
*⟨⬪ الـلـقـب ⬪⟩*
❖❘  ❘❖
*⟨⬪ اسـم الأنـمـي ⬪⟩*
❖❘  ❘❖
✠ ━━ • ━ ‹♾️› ━ • ━━ ✠
*⟨⬪ من طـرف ⬪⟩*
❖❘  ❘❖
*⟨⬪ ذكر أو انثى ⬪⟩*
❖❘  ❘❖
⋄━───═◞⬪♾️⬪◟═───━⋄
*💫 ارسل صورة للشخصية التي*
*اخترتها .* 
*💫 أنرتم جميعاً .*
❃━══✦•〘• ♾️ •〙•✦══━❃
*✠ ~مــع تــ✍︎ـحــيــات ↯:~*
*「 ♾️ 𝑰𝑵𝑭𝑰𝑵𝑰𝑻𝒀 | 自然 」*`;


  conn.sendFile(m.chat, 'https://telegra.ph/file/da50fedc05d0058c93d8c.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(الاستماره|الاستمارة|استماره)$/i;
handler.command = new RegExp;

export default handler;