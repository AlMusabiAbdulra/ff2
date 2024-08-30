import fetch from 'node-fetch';

const handler = async (m, { command, usedPrefix, conn, args, text }) => {


if (!text) {
 conn.sendMessage(m.chat, {text: 'ادخل نص اولا'}, { quoted: m });
 conn.sendMessage(m.chat, { react: { text: '❗', key: m.key } });
 return
}


await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });


try{


let img = `https://via.placeholder.com/600x300/000000/ffffff?text=${encodeURIComponent(text)}`;

await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

await conn.sendMessage(m.chat, {image: {url: img}}, {quoted: m});
 

 await conn.sendMessage(m.chat, { react: { text: '👌🏻', key: m.key } });
 
 } catch {
 await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
 }
 };
 
 handler.command = /^(بوستر)$/i;
export default handler;
