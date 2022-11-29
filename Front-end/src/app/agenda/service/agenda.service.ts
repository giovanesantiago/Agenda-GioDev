import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { first, Observable, retry, take } from 'rxjs';
import { Agenda } from '../model/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  url: string = 'http://localhost:8080/agenda';
  
  constructor(
    private http:HttpClient
  ) { }

    listarAgenda(): Observable<Agenda[]> {
      return this.http.get<Agenda[]>(this.url);
    }

    pesquisarContato(nome: String): Observable<Agenda> {
        return this.http.get<Agenda>(this.url + "/" + nome)
    }

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }

    addContato(contato: Agenda) {
      console.log(contato)
      return this.http.post<Agenda>(this.url + "/addContato", contato).pipe(first());
      
    }

    deleteContato(nome: String) {
      return this.http.delete<String>(this.url + "/delete/" + nome)
    }

}
