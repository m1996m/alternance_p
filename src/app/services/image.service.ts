import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageModel } from '../Models/image-model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  global = 'http://127.0.0.1:8000/image/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };
  constructor(private http: HttpClient) { }

  create(image: ImageModel){
    return this.http.post(this.global + 'new', image, this.httpOptions);
  }

  getimage(){
    return this.http.get(this.global + '', this.httpOptions);
  }

  delete(id: number){
    return this.http.delete(this.global + '' + id, this.httpOptions);
  }

  edit(image: ImageModel, id: number){
    return this.http.post(this.global +''+ id +'/edit/' , image, this.httpOptions);
  }
}
