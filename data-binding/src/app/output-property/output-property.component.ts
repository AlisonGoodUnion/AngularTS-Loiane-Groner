import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  //outputs: ['mudouValor']
  //também podemos declarar os outputs aqui
})
export class OutputPropertyComponent implements OnInit {

  //com o input podemos no data-binding component setar um valor para o contador.
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter(); //eventEmitter utilizado para expor eventos.

  constructor() {
  }

  ngOnInit() {
  }

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }
}
