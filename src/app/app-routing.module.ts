import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesPersonagemComponent } from './components/detalhes-personagem/detalhes-personagem.component';
import { ListaPersonagensComponent } from './components/lista-personagens/lista-personagens.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: ListaPersonagensComponent },
  { path: 'detalhes/:id', component: DetalhesPersonagemComponent },
  { path: '**', component: ListaPersonagensComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
