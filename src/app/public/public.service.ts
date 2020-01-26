import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-API-Key': 'c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e' })
};

const baseUrl = 'http://18.191.163.138:3000/v1/';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {

  }


  validateLicenseKey() {
    return this.http.get(`${baseUrl}settings`, httpOptions);
  }

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
