import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {

  constructor(private http:HttpClient) { }

  getConfig(configUrl:string){
    return this.http.get(configUrl);
  }
}
