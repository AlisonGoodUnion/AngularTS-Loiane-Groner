import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';// no module de funcionalidade se faz necessário importar o CommonModule
// se o module necessida por exemplo realizar requests
// http se faz necessário importar o httpmodule aqui também.

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import {CursosService} from "./cursos.service";

@NgModule({//ao criar um novo component dentro do curso, automaticamento já é declarado
  //no seu ngmodule pai.
  declarations: [CursosComponent, CursoDetalheComponent], // aqui declaramos nosso component no module se faz necessario importar
  imports: [
    CommonModule
  ],
  exports: [ // com essa diretive é possivel disponibilizar nosso component para toda a aplicação
    CursosComponent
  ],
  providers: [CursosService]
})
export class CursosModule { }
// ng g m cursos comando para gerar novo module
// g: de generate m: de modulo
// ng g c cursos comando para criar novo component que contem files css, html e ts
// como o component tem o mesmo nome do module, os files criados pelo angular cli
// acabam ficando no mesmo diretório, neste caso o CURSO
//automaticamente é atualizado o app.module.ts
// mas nesse caso vamos armazenar o nosso component no nosso module de cursos
