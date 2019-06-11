import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html', // Set o file HTML do package.
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //se utilizarmos tributo any, pode ser inserido qualquer valor na variavel
  //neste caso tipamos ela como string.
  nomePortal: string;
  cursos: string[] = ['Angular',
                      'Ext JS',
                      'Java'];

  constructor() {
    this.nomePortal = 'http://loiane.training';
  }

  ngOnInit() {
  }

}
