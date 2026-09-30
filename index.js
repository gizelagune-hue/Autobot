const { Client, LocalAuth } = require("whatsapp-web.js");

const OWNER = "258872891730@c.us";
const BOT_NUMBER = "258869621249";
const PREFIX = ".";

const client = new Client({
    authStrategy: new LocalAuth({
        clientId: "autobot"
    }),
    puppeteer: {
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ]
    }
});

client.on("code", (code) => {
    console.log("================================");
    console.log("🔐 AUTOBOT PAIRING CODE");
    console.log("📱 Número:", BOT_NUMBER);
    console.log("🔑 Código:", code);
    console.log("================================");
});

client.on("authenticated", () => {
    console.log("✅ AUTOBOT AUTENTICADO!");
});

client.on("ready", () => {
    console.log("🤖 AUTOBOT ONLINE!");
    console.log("👑 Owner:", OWNER);
});

client.on("auth_failure", (error) => {
    console.log("❌ Falha na autenticação:", error);
});

client.on("disconnected", (reason) => {
    console.log("⚠️ Autobot desconectado:", reason);
});

client.on("message", async (msg) => {
    const text = msg.body.trim();

    if (!text.startsWith(PREFIX)) return;

    const command = text
        .slice(PREFIX.length)
        .split(" ")[0]
        .toLowerCase();

    const isOwner = msg.author === OWNER || msg.from === OWNER;

    if (command === "ping") {
        return msg.reply("🏓 Pong!\n🤖 Autobot online!");
    }

    if (command === "dono") {
        return msg.reply(
            "👑 *OWNER DO AUTOBOT*\n\n" +
            "📱 Número: 258872891730"
        );
    }

    if (command === "info") {
        return msg.reply(
            "🤖 *AUTOBOT*\n\n" +
            "📱 Bot: 258869621249\n" +
            "👑 Owner: 258872891730\n" +
            "🔹 Prefixo: .\n" +
            "⚡ Status: Online"
        );
    }

    if (command === "menu") {
        return msg.reply(
`╭━━━〔 🤖 AUTOBOT 〕━━━╮
┃
┃ 🔹 .ping
┃ 🔹 .menu
┃ 🔹 .info
┃ 🔹 .dono
┃ 🔹 .status
┃ 🔹 .uptime
┃
┃ 👥 GRUPO
┃ 🔹 .add
┃ 🔹 .remove
┃ 🔹 .promote
┃ 🔹 .demote
┃ 🔹 .admins
┃ 🔹 .tagall
┃ 🔹 .hidetag
┃ 🔹 .link
┃ 🔹 .open
┃ 🔹 .close
┃
┃ 🎮 DIVERSÃO
┃ 🔹 .dado
┃ 🔹 .coin
┃ 🔹 .8ball
┃ 🔹 .ship
┃ 🔹 .rate
┃
┃ 👑 OWNER
┃ 🔹 .restart
┃ 🔹 .shutdown
┃ 🔹 .leave
┃ 🔹 .on
┃ 🔹 .off
┃ 🔹 .addowner
┃ 🔹 .delowner
┃
┃ 💰 ALUGUEL
┃ 🔹 .alugar
┃ 🔹 .alugueis
┃ 🔹 .renovar
┃ 🔹 .cancelar
┃
╰━━━━━━━━━━━━━━━━━━━━╯`
        );
    }

    if (command === "status") {
        return msg.reply("🟢 *AUTOBOT ONLINE*");
    }

    if (command === "uptime") {
        const seconds = Math.floor(process.uptime());
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return msg.reply(
            `⏱️ Uptime: ${hours}h ${minutes}m ${secs}s`
        );
    }

    if (command === "dado") {
        const number = Math.floor(Math.random() * 6) + 1;
        return msg.reply(`🎲 Resultado: *${number}*`);
    }

    if (command === "coin") {
        const result = Math.random() < 0.5 ? "CARA" : "COROA";
        return msg.reply(`🪙 Resultado: *${result}*`);
    }

    if (command === "8ball") {
        const answers = [
            "🎱 Sim!",
            "🎱 Não!",
            "🎱 Talvez.",
            "🎱 Com certeza!",
            "🎱 Não sei."
        ];

        return msg.reply(
            answers[Math.floor(Math.random() * answers.length)]
        );
    }

    if (command === "rate") {
        const number = Math.floor(Math.random() * 101);
        return msg.reply(`⭐ Nota: *${number}/100*`);
    }

    // Comandos somente do Owner
    if (
        ["restart", "shutdown", "leave", "on", "off",
         "addowner", "delowner"].includes(command)
        && !isOwner
    ) {
        return msg.reply("❌ Apenas o Owner pode usar este comando.");
    }

    if (command === "leave") {
        if (!msg.from.endsWith("@g.us")) {
            return msg.reply("❌ Use este comando em um grupo.");
        }

        const chat = await msg.getChat();
        await chat.leave();
        return;
    }

    if (command === "restart") {
        await msg.reply("🔄 Reiniciando o Autobot...");
        process.exit(0);
    }

    if (command === "shutdown") {
        await msg.reply("🛑 Autobot desligado.");
        process.exit(0);
    }
});

client.initialize();
