import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgendaModel } from '../Models/agenda-model';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  global = 'http://127.0.0.1:8000/agenda/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };
  constructor(private http: HttpClient) { }

  create(agenda: AgendaModel){
    return this.http.post(this.global + 'new', agenda, this.httpOptions);
  }

  getagenda(){
    return this.http.get(this.global + '', this.httpOptions);
  }
  getOne(id: number){
    return this.http.get(this.global + 'agenda/' + id, this.httpOptions);
  }

  delete(id: number){
    return this.http.delete(this.global + 'supp/delete/' + id, this.httpOptions);
  }

  edit(agenda: AgendaModel, id: number){
    return this.http.post(this.global +'user'+ id +'/edit/' , agenda, this.httpOptions);
  }
}
