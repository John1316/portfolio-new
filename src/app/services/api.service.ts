import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _HttpClient:HttpClient
  ) { }
  getAllData() :Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}`)
  }
  submitContactForm(data:Object) :Observable<any>{
    return this._HttpClient.post(`https://portfolio-56cbc-default-rtdb.firebaseio.com/contacts.json` , data)
  }
}
