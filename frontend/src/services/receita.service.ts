import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Receita } from 'src/models/receita.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  baseUrl = "http://localhost:3000/noticias"

  constructor(private http: HttpClient) { }

  cadastrar(receita: Receita): Observable<Receita> {
    return this.http.post<Receita>(this.baseUrl, receita);
  }

  listar(): Observable<Receita[]> {
    return this.http.get<Receita[]>(this.baseUrl);
  }

  listarId(id: string): Observable<Receita>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Receita>(url)
  }

}
