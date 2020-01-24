import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const baseUrl = 'http://18.191.163.138:3000/v1/';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }


  authenticateUser(postData) {
    return this.http.post(`${baseUrl}login`, postData);
  }

  forgetPassword(postData) {
    return this.http.post(`${baseUrl}password/forgot`, postData);
  }


  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    return this.storage.get(key);
  }


  getFromLocal(key): any {
    console.log('recieved= key:' + key);
    return this.storage.get(key);
  }


}
