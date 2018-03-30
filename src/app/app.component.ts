import { Component } from '@angular/core';
import { Produto } from './Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lstComidas: Produto[] = [];

  title = 'app works!';

  constructor(){
    let p = new Produto();
    p.id = 1;
    p.nome = "Macarrão";
    this.lstComidas.push(p);
  }

}
