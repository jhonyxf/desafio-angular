import { Component, Input } from '@angular/core';
import { Personagem } from 'src/app/shared/models/personagem';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.scss'],
})
export class PersonagemComponent {
  @Input()
  personagem: Personagem | null = null;
}
