import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com'
  urlDaImagem: string = 'http://lorempixel.com/400/200/'

  cursosAngulas: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  getValor() {
    return 3;
  }

  getCurtirCurso(): boolean {
    return true;
  }
}
