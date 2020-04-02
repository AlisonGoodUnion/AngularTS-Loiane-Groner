import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-contador-component',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  // outputs: ['mudouValor']
  // também podemos declarar os outputs aqui
})
export class OutputPropertyComponent implements OnInit {

  // com o input podemos no data-binding component setar um valor para o contador.
  @Input() valor = 0;

  // eventEmitter utilizado para expor eventos.
  @Output() mudouValor = new EventEmitter();

  /** acessar a variavel no html com o decorator ViewChild */
  // ElementRef tipo correto do element input
  @ViewChild('campoInput', {static: false}) campoValorInput: ElementRef;

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
