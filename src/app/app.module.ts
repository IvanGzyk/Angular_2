import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmesComponent } from './components/filmes/filmes.component';
import { FilmeDetalhesComponent } from './components/filmes-detalhes/filmes-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmesComponent,
    FilmeDetalhesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
