let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Sewa bot 〙 ═
╠➥ *1 Bulan* :      *Rp 20.000,00*
╠➥ *Permanen* : *Rp 30.000,00*
╠➥ *Premium* :   *Rp 15.000,00*
╠➥ *Sc Bot* :        *cari sendiri bang di yt banyak*
║
╠═〘 PEMBAYARAN 〙 ═
╠➥ Gopay, Dana, Dan Pulsa
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2022 BLZXB5
╠═ Scrip original by Nurutomo
╠═〘 ${namabot} 〙 ═`.trim(), footer, 'Dana', '#viadana', 'OVO', '#viaovo', 'Pulsa', '#viapulsa', m)
}

handler.command = /^sewa(bot)?$/i

module.exports = handler
