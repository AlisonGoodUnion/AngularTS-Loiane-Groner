import {Component, Input, OnInit} from '@angular/core';


//também podemos declarar input como metadado do component.
@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  inputs: ['nomeCurso2:nomeCurso2']
})
export class InputPropertyComponent implements OnInit {


  //uma boa pratica é sempre declarar o input e atributo na mesma linha
  @Input('nome') nomeCurso: string = '';
  //decorator possibilita expor propriedade podemos
  // passar como parametro para a annotation, um nome mais clean
  // para ser utilizado como atributo do component

  nomeCurso2: string = '';

  constructor() {
  }

  ngOnInit() {
  }

}
