import { Component } from '@angular/core'; //package core do angular

// annotation: passando informacoes adicionais para o compilador/transpilador dados =  metadados
@Component({ // boas praticas web components metadados
  selector: 'meu-primeiro-component',
  template: `
  <p>Meu primeiro component com angular2</p>
  ` //template literal utilizando acento crase
}) // Funcionalidade do ECMA script2015
export class MeuPrimeiroComponent {
// necessario export na class para que seja possível expor a class para outros files
// todo component diretive etc.. necessita ser declarado no app.module.ts
//para criacao de um coponent usando o ng cli pode ser utilizado o comando
// ng g c meu-primeiro2
// g de gerar
// c de component
// provavelmente serao criados
// 1 arquivo .spec.ts utilizados para testes unitarios
// 2 arquivo .ts do componento
// 3 arquivo .html e .css
// utilizando o comando automaticamente é feita a inclusao no app.module.ts
// entao para utilizacao é necessario pegar o conteudo do @Component selector
// e adicionar no HTML
}
