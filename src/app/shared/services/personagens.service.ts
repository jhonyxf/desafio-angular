import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Personagem } from '../models/personagem';

@Injectable({
  providedIn: 'root',
})
export class PersonagensService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPersonagens(): Observable<Personagem[]> {
    return this.http.get<Personagem[]>(this.apiUrl);
  }

  pesquisarPersonagens(nome: string): Observable<Personagem[]> {
    const params = { nome };
    return this.http.get<Personagem[]>(`${this.apiUrl}/`, { params });
  }

  getPersonagemPorId(id: number): Observable<Personagem> {
    return this.http.get<Personagem>(`${this.apiUrl}/${id}`);
  }
}
