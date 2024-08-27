let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw `*انت ادمن زعيم المكان يا مطورى 🌚♥️*`
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^ارفع|ارفعنى|ار|ارفعني|autoadmin$/i
handler.rowner = true
handler.botAdmin = true
export default handler
