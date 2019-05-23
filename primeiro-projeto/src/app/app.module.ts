import { BrowserModule } from '@angular/platform-browser'; //BrowserModule prepara a aplicação pra ser executada em um browser
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';// a diretiva ngmodule faz parte desse pacote, é utilizada no two-way data binding
//utilizado para valicaçoes de formularios
import { HttpModule } from '@angular/http'; //modulo utilizado para requisições ajax.
// para utilizar a dependencia do httpmodule se faz necessario o download dela atravez do comando npm i @angular/http
// import { Observable } from 'rxjs';

import { AppComponent } from './app.component';//imports das nossas classes
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from 'src/app/cursos/cursos.module';

//modulo raiz da aplicacao
@NgModule({
  // para dizer que a class é um module utilizamos o decoratos NgModule
  // necessario importar o angular core.
  declarations: [// metadados declarados no module
    AppComponent,//aqui sao declarados todos componentes diretivas e pipes que vamos utilizar no projeto
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [ // no metadado de imports colocamos outros modulos que queremos utilizar nesse module
    BrowserModule,//a ordem dos imports e versao tem impacto no funcionamento da aplicacao
    HttpModule,
    FormsModule,
    // Observable
    // é possivel criar seus proprios modules para não importar todas dependencias aqui
    CursosModule
  ],
  providers: [], // providers recebem services que os componentes podem utilizar
  //servicos de login, ou rotas geralmente ficam aqui, pois tem scope global...
  bootstrap: [AppComponent]// aqui fica o view port o componente principal.
})
export class AppModule { }
//em um modulo primeiro temos a class AppModule declaração conforme ecma2015
// o Angular contem um style guide onde existe as convenções a serem seguidas
//se verificarmos o nome da classe não é em camelcase igual o java
//https://angular.io/guide/styleguide
