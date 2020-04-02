import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent
  implements OnInit, OnChanges, OnDestroy, DoCheck,
    AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked {
  /**
   * não existe a necessidade de declarar as interfaces
   * mas é considerada uma boa pratica
   */

  /**
   * Documentacao dos hooks
   * https://angular.io/guide/lifecycle-hooks
   */

  @Input() valorInicial = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void { // before ngOnInit()
    this.log('ngOnChanges');
  }

  ngOnInit() { // ao iniciar o component entra nesse metodo.
    this.log('ngOnInit');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }

  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }

  private log(value: any) {
    console.log(value);
  }

}
