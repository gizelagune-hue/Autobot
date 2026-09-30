function menu() {
    return `
╭━━━〔 🤖 AUTOBOT 〕━━━╮
┃
┃ 🔹 Prefixo: .
┃ 🟢 Status: ${botEnabled ? "ONLINE" : "OFFLINE"}
┃ ⏱️ Uptime: ${uptime()}
┃
┃ 📌 GERAL
┃ .menu
┃ .ping
┃ .info
┃ .bot
┃ .status
┃ .dono
┃ .owner
┃ .uptime
┃ .perfil
┃ .id
┃ .regras
┃ .suporte
┃ .sobre
┃
┃ 👥 GRUPO
┃ .grupo
┃ .admins
┃ .tagall
┃ .hidetag
┃ .add
┃ .remove
┃ .kick
┃ .promote
┃ .demote
┃ .link
┃ .setname
┃ .setdesc
┃ .open
┃ .close
┃ .warn
┃ .warnings
┃ .resetwarn
┃ .antilink
┃ .antispam
┃ .antiflood
┃ .welcome
┃ .goodbye
┃ .mute
┃ .unmute
┃
┃ 🎮 DIVERSÃO
┃ .dado
┃ .dice
┃ .coin
┃ .cara
┃ .coroa
┃ .8ball
┃ .sorteio
┃ .rate
┃ .ship
┃ .quote
┃ .joke
┃ .love
┃ .random
┃ .escolher
┃
┃ 🛠️ UTILIDADES
┃ .calc
┃ .hora
┃ .data
┃ .sticker
┃ .fig
┃ .toimg
┃ .qrcode
┃ .traduzir
┃ .pingms
┃ .contador
┃
╰━━━━━━━━━━━━━━━━━━━━╯
`;
}

function menuOwner() {
    return `
╭━━━〔 👑 AUTOBOT OWNER 〕━━━╮
┃
┃ 🤖 SISTEMA
┃ .boton
┃ .botoff
┃ .bot
┃ .status
┃ .restart
┃ .shutdown
┃ .leave
┃ .backup
┃ .database
┃ .stats
┃ .clone
┃ .listbots
┃ .stopclone
┃
┃ 💰 SISTEMA DE ALUGUEL
┃ .alugar 30
┃ .aluguel
┃ .renovar 30
┃ .cancelar
┃ .alugueis
┃ .alugados
┃ .expirados
┃ .addcliente
┃ .delcliente
┃ .clientes
┃ .cliente
┃ .suspender
┃ .reativar
┃ .avisoexpiracao
┃ .setpreco
┃ .precos
┃ .cobranca
┃
┃ 👑 ADMINISTRAÇÃO
┃ .addowner
┃ .delowner
┃ .listowner
┃ .broadcast
┃ .block
┃ .unblock
┃ .listblock
┃ .setprefix
┃
┃ 📊 CONTROLE
┃ .grupos
┃ .grupoid
┃ .rental
┃ .logs
┃ .helpowner
┃
╰━━━━━━━━━━━━━━━━━━━━╯
`;
}
