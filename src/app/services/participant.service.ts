import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParticipantModel } from '../Models/participant-model';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  global = 'http://127.0.0.1:8000/user/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     
    })
  };
  constructor(private http: HttpClient) { }

  create(participant: ParticipantModel){
    return this.http.post(this.global + 'new', participant, this.httpOptions);
  }

  getparticipant(){
    return this.http.get(this.global + '', this.httpOptions);
  }
  getOne(id: number){
    return this.http.get(this.global + '' + id, this.httpOptions);
  }

  delete(id: number){
    return this.http.delete(this.global + 'supp/delete/' + id);
  }

  edit(participant: ParticipantModel, id: number){
    return this.http.post(this.global+'edit/'+id  , participant, this.httpOptions);
  }
}
