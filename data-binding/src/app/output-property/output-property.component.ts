import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

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

  /** acessar a variavel no html com o decorator ViewChild*/
  @ViewChild('campoInput', {static: false}) campoValorInput: ElementRef; //ElementRef tipo correto do element input

  constructor() {
  }

  ngOnInit() {
  }

  incrementa() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }
}
