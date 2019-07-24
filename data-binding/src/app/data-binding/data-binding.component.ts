import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
  //podemos usar direto styles sem css file!
  styles: [
      `
      .highlight {
        background-color: brown
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com'
  urlDaImagem: string = 'http://lorempixel.com/400/200/'

  cursosAngulas: boolean = true;
  valorAtual: string;
  valorSalvo: string;


  isMouseOuver: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  getValor() {
    return 3;
  }

  getCurtirCurso(): boolean {
    return true;
  }

  botaoClicado() {
    alert("botão click event binding!");
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log((<HTMLInputElement>evento.target).value); //com o keyup tudo que é digitado é exibido no console log.
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvar(value: string) {
    this.valorSalvo = value;
  }

  onMouseOverOut() {
    this.isMouseOuver = !this.isMouseOuver;
    console.log(this.isMouseOuver);
  }
}
