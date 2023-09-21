import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Personagem } from 'src/app/shared/models/personagem';
import { PersonagensService } from 'src/app/shared/services/personagens.service';
import { Location } from '@angular/common';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

@Component({
  selector: 'app-detalhes-personagem',
  templateUrl: './detalhes-personagem.component.html',
  styleUrls: ['./detalhes-personagem.component.scss'],
})
export class DetalhesPersonagemComponent implements OnInit {
  idPersonagem!: number;
  personagem!: Personagem;

  displayedColumns: string[] = ['propriedade', 'valor'];
  dataSource = new MatTableDataSource<any>([]);

  constructor(
    private personagensService: PersonagensService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idPersonagem = Number(params['id']);
    });

    this.personagensService.getPersonagemPorId(this.idPersonagem).subscribe({
      next: (personagem: Personagem) => {
        if (personagem) {
          this.personagem = {
            id: personagem.id,
            name: personagem.name,
            status: personagem.status,
            species: personagem.species,
            type: personagem.type,
            gender: personagem.gender,
            origin: {
              name: personagem.origin.name,
              url: personagem.origin.url,
            },
            location: {
              name: personagem.location.name,
              url: personagem.location.url,
            },
            image: personagem.image,
            episode: personagem.episode,
            url: personagem.url,
            created: this.formatarData(personagem.created),
          };

          const detalhesArray = [
            { propriedade: 'ID', valor: this.personagem.id },
            { propriedade: 'Nome', valor: this.personagem.name },
            { propriedade: 'Status', valor: this.personagem.status },
            { propriedade: 'Espécie', valor: this.personagem.species },
            { propriedade: 'Tipo', valor: this.personagem.type },
            { propriedade: 'Gênero', valor: this.personagem.gender },
            { propriedade: 'Origem Nome', valor: this.personagem.origin.name },
            { propriedade: 'Origem URL', valor: this.personagem.origin.url },
            {
              propriedade: 'Localização Nome',
              valor: this.personagem.location.name,
            },
            {
              propriedade: 'Localização URL',
              valor: this.personagem.location.url,
            },
            { propriedade: 'Url da Imagem', valor: this.personagem.image },
            {
              propriedade: 'Episódios',
              valor: this.personagem.episode.join(', '),
            },
            { propriedade: 'URL do Personagem', valor: this.personagem.url },
            { propriedade: 'Data Criação', valor: this.personagem.created },
          ];

          this.dataSource = new MatTableDataSource<any>(detalhesArray);
        }
      },
      error: () => {
        console.log('Personagem não encontrado');
      },
    });
  }

  formatarData(data: string): string {
    const dataFormatada = parseISO(data);
    return format(dataFormatada, 'dd/MM/yyyy', { locale: ptBR });
  }

  voltar(): void {
    this.location.back();
  }
}
