//Crie a const para a frase aqui

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

const novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja")
console.log(novaFrase)
console.log(novaFrase.includes("verde", "laranja"))


const posicao = frase.indexOf("\"")
console.log(posicao)
const substring = frase.substring(posicao, frase.length -1)
console.log(substring)
console.log(frase.replace(substring, substring.toUpperCase()))