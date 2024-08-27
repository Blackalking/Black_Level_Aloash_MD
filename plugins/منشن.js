let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`*الرساله:*\n${text ? `${text}\n` : ''}\n*𝐁𝐋𝐀𝐂𝐊 𝐂𝐀𝐓🇪🇬 :}*\n\𝐁𝐎𝐓ـᬽـ 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏ᬽـ \n\n\n` + users.map(v => '│♪ @' + v.replace(/@.+/, '')).join`\n` + '\n⛾「 *تمت الإشارة للكل* 」⛾', null, {
        mentions: users
    })
}

handler.help = ['منشن']
handler.tags = ['owner']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler
