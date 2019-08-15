var comprimento = 50;
var largura = 30;
var altura = 25;
//let volume: number = comprimento * largura * altura
var fVolume = function (comp, larg, alt) {
    return (comp * larg * alt);
};
console.log("O volume da caixa \u00E9 " + fVolume(comprimento, largura, altura) + ", com comprimento " + comprimento + ", largura " + largura + " e altura " + altura);
