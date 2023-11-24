// estrutura de decisão switch/case/break/default

//switch - case
let fruta = 'laranja'
switch (fruta){
    case 'laranja':
        console.log('suco de laranja')
    case 'banana':
        console.log('vitamina de banana')
}

//Break
fruta = 'uva'
switch (fruta){
    case 'laranja':
        console.log('suco de laranja')
        break
    case 'banana':
        console.log('vitamina de banana')
        break
    case 'maçã':
        console.log('suco de maçã')
        break
    case 'uva':
        console.log('suco de uva')
}

//defaut
fruta = 'pera'
switch (fruta){
    case 'laranja':
        console.log('suco de laranja')
        break
    case 'banana':
        console.log('vitamina de banana')
        break
    case 'maçã':
        console.log('suco de maçã')
        break
    case 'uva':
        console.log('suco de uva')
    default:
        console.log('suco generico')
}
