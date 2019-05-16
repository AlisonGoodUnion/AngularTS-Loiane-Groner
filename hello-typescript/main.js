//para compilar arquivo ts, executar no terminal command tsc nomedoarquivo.ts
//assim é gerado o arquivo js
var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
// para a ES6 é necessario transpiler para compilar para o js
var num = 2;
var PI = 3.14;
//novidades da ecma em http://es6-features.org/#Constants
//ex arrow func
var numbers = [1, 2, 3];
//func map é bastante utilizada
//
numbers.map(function (valor) {
    return valor * 2;
});
numbers.map(function (valor) { valor * 2; });
// semelhante ao codigo a cima mas com ES2016
// exemplo de quem faz a transipilação ou tradução do codigo TS para JS é o Babel https://babeljs.io/
//ex de criacao de class com TS
//se jogar esse codigo no try it out do babeljs podemos ver todo o codigo js
//annotation em TS são chamadas de Decorators
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) { return x + y; };
    return Matematica;
}());
//definicoes de tipos de classes
var n1 = 'string teste';
n1 = 4; //ao declarar a var como any o ts consegue compilar, já se tiparmos para string
//ocorre erro
