import { Component, OnInit } from '@angular/core';
import { PersonagensService } from 'src/app/shared/services/personagens.service';
import { Personagem } from 'src/app/shared/models/personagem';

@Component({
  selector: 'app-lista-personagens',
  templateUrl: './lista-personagens.component.html',
  styleUrls: ['./lista-personagens.component.scss'],
})
export class ListaPersonagensComponent implements OnInit {
  personagens: Personagem[] = [];

  constructor(private personagensService: PersonagensService) {}

  ngOnInit(): void {
    this.carregarPersonagens();
  }

  carregarPersonagens(): void {
    this.personagensService.getPersonagens().subscribe((data: any) => {
      this.personagens = data.results;
    });
  }

  atualizarLista(resultadosPesquisa: Personagem[]): void {
    this.personagens = [];
    this.personagens = resultadosPesquisa as Personagem[];
  }
}
