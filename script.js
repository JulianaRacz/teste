//console.log('Digite o nome do seu jogador')
//let nickname = 'Juliana'
//console.log('Bem vindo ' + nickname)

//const notificacao = 'Pokemon Go diz:'
//console.log(notificacao + 'Tem um novo pokemon na região')
//console.log(notificacao + 'voce foi derrotado por um lider')

//let poteCafe = 'Café Pilão'
//let poteAcucar = 'Açucar cristal'
//let poteBiscoito = 'Biscoito Maizena'
//console.log('Na cozinha da vovó hoje tem: ' + poteCafe + ' ' + poteAcucar + ' ' + poteBiscoito + ' ')

//let nomePokemon = 'pikachu'
//let nivelPokemon = 20
//let pontosDeVidaPokemon = 45
//let pokemonSexo = 'M'
//let selecionavel = true

//let nomePessoa = 'Jacira'
//let idade = 115
//let numeroTelefone = '1199990875'
//let cpf = '011.333.444-01'
//let endereco = 'Rua das Palmeiras, 69'
//let recebePensao = true

/*let pokemon = ['Pikachun' , 'Charmander' , 'Bulbassaur']
let timePokemon [
    ['Pikachu', 'M', 'level 01'],
    ['Chamander', 'F', 'level 4']
]
console.log(pokemon[1])*/

/*let preco = 10
preco += 5 // preco = preco + 5 
console.log(preco)*/

// Verificador logico AND &&
let idade = 18
let vistoVerificado = true
let resultado = (idade >= 18) && (vistoVerificado === true)
console.log(resultado)

//Exemplo com uma condição não verdadeira, com o AND TODAS as condições tem que ser VERDADEIRA
let moedasColetadas = 100
let item = 'estrela'
resultado = (moedasColetadas >= 100) && (item === 'Estrela')
console.log(resultado)

/* Verificador logico OR || só pode sair se não chover ou se tiver um guarda-chuva,
aqui somente uma das opções precisar ser verdade*/
let tempo = 'sol'
let iten = 'guarda-chuva'
let podeSair = (tempo !== 'chuva' || (iten === 'guarda-chuva'))
console.log('Pode sair? ' + podeSair)

/* Verificador logico NOT (!), utilizado para negar uma variavel todas as condições
tem que ser verdadeiras*/
tempo = 'chuva'
resultado = tempo === 'chuva'
console.log(!resultado)