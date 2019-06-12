import { Injectable } from '@angular/core';
import {CursosModule} from "./cursos.module";
//service gerada a partir do command ng g s cursos/cursos
//o cli nos gera o file já com seu esqueleto pronto.
//junto gera a class de test spec.ts
@Injectable({
  providedIn: 'root' // ao utilizarmos o providedIn não é necessário declarar a service no
                    //NgModule providers, assim podemos utilizar a service em qualquer lugar do projeto.
                    // https://angular.io/guide/providers
                    // conforme a documentação, podemos declarar também qual module pode acessar nossa service
                    //declarando ela no providedIn limitando assim seu escopo
})
// o decorator injectable determina que a service pode ser injetada para seu uso.
//essa injeção é feita via construtor.
export class CursosService {

  constructor() { }

  getCursos(){
    return ['Angular',
            'Ext JS',
            'Java',
            'C#'];
  }
}
