import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Filme } from 'src/app/models/filmes';
import { FilmesService } from 'src/app/services/filmes.service';
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  @Output()
  public filmeSelecionado: EventEmitter<Filme> = new EventEmitter();

  public filmes$: Observable<Filme[]> = this.FilmesService.get().pipe(
    tap(filmes => {
      console.log(filmes);
    })
  )

  constructor(
    private FilmesService: FilmesService,
  ){

  }

  ngOnInit(): void {

  }

  public selecionaFilme(filme: Filme): void {
    console.log(filme)
    this.filmeSelecionado.emit(filme);
  }

}
