let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(wait)
let res = await fetch(`https://api.dapuhy.xyz/api/socialmedia/dddtik?url=${args[0]}&apikey=HRHdL99iyl`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { title, download } = json.result
await conn.sendFile(m.chat, download.server1, 'tt.mp4', `${title}`.trim(), m)
}

handler.help = ['tiktok <url>']
handler.tags = ['downloader']
handler.command = /^tiktok$/i

module.exports = handler
