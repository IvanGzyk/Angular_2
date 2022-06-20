import { Component } from '@angular/core';
import { Filme } from './models/filmes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web';

  public filmeParaExibir?: Filme;

  public exibeFilme(filme: Filme): void {
    this.filmeParaExibir = filme;
  }

}
