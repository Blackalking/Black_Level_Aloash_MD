import fetch from "node-fetch";
let timeout = 60000,
  poin = 4999;
const handler = async (m, {
  conn,
  command,
  usedPrefix
}) => {
  conn.tebaklogo = conn.tebaklogo ? conn.tebaklogo : {};
  let id = m.chat;
  if (id in conn.tebaklogo) return await conn.reply(m.chat, "╮───────────────────────╭ـ\nرد على سؤال الاول يا حبيب قلبى💎\n╯───────────────────────╰", conn.tebaklogo[id][0]), !1;
  let res = await fetch("https://raw.githubusercontent.com/zyad5yasser/bot-test/master/src/game/لوجو.json"),
    src = await res.json(),
    json = {
      hasil: src[Math.floor(Math.random() * src.length)]
    },
    caption = `*${command.toUpperCase()}*\nمــا هــو اســم هــذا الشــعـــار\n\nالـوقـت⏳↞\n╯────────────────⟢ـ\n *${(timeout / 1000).toFixed(2)} ثـانـيـه⌚*\n\n𝐵𝐿𝐴𝐶𝐾 𝐵𝛩𝑇💎\n╯────────────────⟢ـ\n↞الـجـائـزة💰↞: ${poin} XP\n\n╯────────────────⟢ـ \n   `.trim();
  conn.tebaklogo[id] = [await conn.sendFile(m.chat, json.hasil.data.image, "", caption, m), json, poin, setTimeout(async () => {
    conn.tebaklogo[id] && await conn.reply(m.chat, `انــتــهــي الـوقـت⏳\nالاجــابــه هيا: *${json.hasil.data.jawaban}*`, conn.tebaklogo[id][0]),
      delete conn.tebaklogo[id];
  }, timeout)];
};
handler.help = ["tebaklogo"], handler.tags = ["game"], handler.command = /^tebaklogo|لوجو/i;
export default handler;
const buttons = [
  ["Hint", "/hlog"],
  ["Nyerah", "menyerah"]
];
