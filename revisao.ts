let n1: number = 2
let n2: number = 6
let n3: number = 10

// let media: number = (nota1 + nota2 + nota3) / 3

let fMedia = function(nota1:number, nota2:number, nota3:number): number{
    return (nota1 + nota2 + nota3) / 3
}

console.log(`A media das notas ${n1}, ${n2} e ${n3} é: ${fMedia(n1,n2,n3)}`)

// console.log ("A média das três notas é igual a: " + fMedia(n1, n2, n3))


