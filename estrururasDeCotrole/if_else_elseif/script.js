let ehLigado = true
if(ehLigado){
    console.log('executou comando')
}

let possuiOvos = false
let itensComprados = ''
if(possuiOvos){
    itensComprados = 'Leite'
}
else{
    console.log('passou na sessão de congelados')
    itensComprados = 'Lasanha congelada'
}

console.log('item comprado: ' + itensComprados)

possuiOvos = true
itensComprados = ''
if(possuiOvos){
    itensComprados = 'Leite'
}
else{
    console.log('passou na sessão de congelados')
    itensComprados = 'Lasanha cogelada'
}
console.log('item comprado: ' + itensComprados)

let nivelDeFome = 3
if(nivelDeFome === 1){
    console.log('pouca fome')
}else if(nivelDeFome === 2){
    console.log('muita fome')
}else{
    console.log('Você comeria mais que o pica pau')
}