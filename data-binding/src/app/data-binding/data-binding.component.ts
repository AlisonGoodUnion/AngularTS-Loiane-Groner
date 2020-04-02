import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
  // podemos usar direto styles sem css file!
  styles: [
      `
      .highlight {
        background-color: brown
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com';
  urlDaImagem = 'http://lorempixel.com/400/200/';

  cursosAngulas = true;
  valorAtual: string;
  valorSalvo: string;

  isMouseOuver = false;

  nomeDoCurso = 'Angular';
  nomeDoCurso2 = 'Angular2';

  valorInicial = 11;

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
    alert('botão click event binding!');
  }

  onKeyUp(evento: KeyboardEvent) {
    const target = evento.target as HTMLInputElement;
    console.log(target.value); // com o keyup tudo que é digitado é exibido no console log.
    this.valorAtual = target.value;
  }

  salvar(value: string) {
    this.valorSalvo = value;
  }

  onMouseOverOut() {
    this.isMouseOuver = !this.isMouseOuver;
    console.log(this.isMouseOuver);
  }

  onMudouValor(evento) {
    console.log(evento.novoValor); // podemos exibir os atributos do atributo passado como parametro, nesse caso é um number.
  }
}
