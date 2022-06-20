import { Injectable } from "@angular/core"
import {  Observable, of } from "rxjs";
import { delay, map } from 'rxjs/operators';
import { Filme } from "../models/filmes";

const FILMES = [
  {
    '_id': '1',
    'codigo': 'ABC-01',
    'nome': 'Sonic 2 - O Filme',
    'urlTraller': 'https://www.youtube.com/embed/A2SjVRziC7M',
    'urlFilmeImg': 'https://br.web.img2.acsta.net/pictures/21/12/08/15/46/3923761.jpg',
    'diretor': 'Jeff Fowler',
    'filmeGenero': 'Aventura/Comédia',
  },
  {
    '_id': '2',
    'codigo': 'ABC-02',
    'nome': 'Homem-Aranha: Sem Volta para Casa',
    'urlTraller': 'https://www.youtube.com/embed/ae6w0-kZ3-M',
    'urlFilmeImg': 'https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG',
    'diretor': 'Jon Watts',
    'filmeGenero': 'Ação/Aventura',
  },
  {
    '_id': '3',
    'codigo': 'ABC-03',
    'nome': 'Red: Crescer é uma Fera',
    'urlTraller': 'https://www.youtube.com/embed/YeQoQNZq7wg',
    'urlFilmeImg': 'https://br.web.img3.acsta.net/pictures/21/11/18/16/57/5746772.jpg',
    'diretor': 'Domee Shi',
    'filmeGenero': 'Animação/Ação',
  },
];

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  constructor(){

  }
  public get(): Observable<Filme[]> {
    return of(FILMES).pipe(
      delay(1000),
      map(arr => {

        return arr.map(t => {
          return new Filme(
            t.codigo,
            t.nome,
            t.urlTraller,
            t.urlFilmeImg,
            t.diretor,
            t.filmeGenero,
          );
        });

      })
    )
  }
}
