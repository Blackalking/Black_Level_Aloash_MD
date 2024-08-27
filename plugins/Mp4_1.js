.باتش-اضافه مهاب.js  let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = 'https://telegra.ph/file/269f65bb08abdd80dd03a.mp4';
  conn.sendPresenceUpdate('recording', m.chat);
  conn.sendMessage(m.chat, {video: {url: vn}, ptt: true, mimetype: 'video/mp4', fileName: `deja de llorar.mp4`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['مهاب'] 
handler.customPrefix = /^(مهاب)$/i;
handler.command = new RegExp;
export default handler
