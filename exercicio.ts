let comprimento: number = 50
let largura: number = 30
let altura: number = 25

//let volume: number = comprimento * largura * altura

let fVolume = function (comp:number, larg:number, alt:number) : number {
    return (comp * larg * alt )
}

console.log (`O volume da caixa é ${fVolume(comprimento,largura,altura)}, com comprimento ${comprimento}, largura ${largura} e altura ${altura}`)
