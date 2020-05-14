import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getLogin(){
    return this.httpClient.get(`https://localhost:3444/api/login`).toPromise();
  }
}
