var n1 = 2;
var n2 = 6;
// let n3: number = 10
// let media: number = (nota1 + nota2 + nota3) / 3
//let fMedia = function(nota1:number, nota2:number, nota3:number): number{
//    return (nota1 + nota2 + nota3) / 3
// }
var fMedia = function (nota1, nota2, nota3) {
    if (nota3 === void 0) { nota3 = 10; }
    return (nota1 + nota2 + nota3) / 3;
};
console.log("A media \u00E9: " + fMedia(n1, n2));
// console.log ("A média das três notas é igual a: " + fMedia(n1, n2, n3))
