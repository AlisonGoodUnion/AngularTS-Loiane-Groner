import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  valor = 5;
  deletarCiclo = false;

  mudarValor() {
    this.valor++;

    /**
     * component ciclo
     * no event click do button, ''ao mudar o valor do input''
     * os eventos que são disparados do component cicle são
     * ciclo.component.ts
     * ngOnChanges
     * ngDoCheck
     * ngAfterContentChecked
     * ngAfterViewChecked
     */
  }

  destruirCiclo() {
    this.deletarCiclo = true;
  }
}
