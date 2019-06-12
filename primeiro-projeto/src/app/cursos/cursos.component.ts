import {Component, OnInit} from "@angular/core";
import {CursosService} from "./cursos.service";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html', // Set o file HTML do package.
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //se utilizarmos tributo any, pode ser inserido qualquer valor na variavel
  //neste caso tipamos ela como string.
  nomePortal: string;
  cursos: string[] = [];

  constructor(private cursoService: CursosService) { // se realizarmos o inject da service como private
    //não é necessario criar um atributo no component que receba essa service
    this.nomePortal = 'http://loiane.training';

    this.cursos = this.cursoService.getCursos();

  }

  ngOnInit() {
  }

}
