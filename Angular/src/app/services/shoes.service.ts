import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Shoes } from '../interfaces/shoes'

@Injectable({
  providedIn: 'root'
})
export class ShoesService {
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { }
  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/shoes');
  }
  save(shoes: Shoes){
    const headers = new HttpHeaders({'Content-Type':'aplication/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/shoes', shoes, {headers:headers});
  }
}
