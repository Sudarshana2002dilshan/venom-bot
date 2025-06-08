const fs = require('fs')
const chalk = require('chalk')

//configurar dono
global.numerodono = "559791535587"
global.nomedono = "𝐕𝐞𝐧𝐨𝐦"
global.nomebot = '𝐕𝐞𝐧𝐨𝐦 𝐏𝐫𝐢𝐯𝐚𝐭 𝟓𝐤' 
global.ytvenom = "YT: https://youtube.com/@VenomModss"
global.prefixo = "."
global.instavenom = "INSTA: instagram.com/venom_mods_ofc"
global.local = "Brasil, AM, SP"

//pacote de figurinhas 
global.packnome = 'Figurinha By'
global.author = 'VenomPrivat5k\n\nCanal: youtube.com/@VenomModss'

//false= desativado e true= ativado
global.autoGravar = false //gravação automática
global.autoDigitar = false //digitação automática
global.autoreDigitarGravar = false //digitação automática + gravação
global.autoVisualizarMsg = false //leitura automática de mensagens
global.autobio = false //atualização automática da bio
global.autovisualizar_status = false //visualização automática de status/história

//tipo de menu
//v1 =menu com imagem,
//v2 =menu com webpag,
//v3 =menu com gif,
//v4 =menu com chamada
//v5 =menu com documento webpag
global.tipomenu = 'v3'

//respostas
global.resposta = {
    feito: 'Feito!',
    premium: 'Este recurso só pode ser utilizado por usuários premium',
    admin: 'Este recurso só pode ser utilizado por administradores',
    botAdmin: 'Este recurso só pode ser utilizado quando o bot é um administrador do grupo',
    dono: 'Este recurso só pode ser utilizado pelo proprietário',
    grupo: 'Este recurso é apenas para grupos',
    privado: 'Este recurso é apenas para chats privados',
    aguarde: 'Aguarde uns minutos...',
    error: 'Erro!',
}

global.thumb = fs.readFileSync('./dados/venom.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`configurar.js foi atualizado!`))
    delete require.cache[file]
    require(file)
})