import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Filme } from "../../models/filmes";

@Component({
  selector: 'app-filmes-detalhes',
  templateUrl: './filmes-detalhes.component.html',
  styleUrls: ['./filmes-detalhes.component.css']
})
export class FilmeDetalhesComponent implements OnInit {

  @Input()
  public filme!: Filme;

  constructor(
  ){

  }

  ngOnInit(): void {

  }

}
