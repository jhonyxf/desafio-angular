import { Component, EventEmitter, Output } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { PersonagensService } from '../../services/personagens.service';
import { Personagem } from '../../models/personagem';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss'],
})
export class PesquisaComponent {
  @Output() resultado = new EventEmitter<any[]>();

  constructor(private personagensService: PersonagensService) {}

  pesquisarPersonagem(event: Event): void {
    const termo = (event.target as HTMLInputElement).value;
    this.personagensService
      .pesquisarPersonagens(termo)
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe({
        next: (data: any) => {
          if (data.results) {
            this.resultado.emit(data.results);
          } else {
            this.resultado.emit([]);
          }
        },
        error: () => {
          this.resultado.emit([]);
        },
      });
  }
}
