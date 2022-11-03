import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AhorcadoServiceService {

  constructor(private httpclient:HttpClient) { }

  getLetras(letter:any):Observable<any>{
    return this.httpclient.post<any>('http://127.0.0.1:3333/getletras',letter)
  }
}
