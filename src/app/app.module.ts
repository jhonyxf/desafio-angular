import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PersonagemComponent } from './components/personagem/personagem.component';
import { ListaPersonagensComponent } from './components/lista-personagens/lista-personagens.component';
import { DetalhesPersonagemComponent } from './components/detalhes-personagem/detalhes-personagem.component';
import { PesquisaComponent } from './shared/components/pesquisa/pesquisa.component';
import { MaterialModule } from './shared/module/material.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonagemComponent,
    ListaPersonagensComponent,
    DetalhesPersonagemComponent,
    PesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
