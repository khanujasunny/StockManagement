import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import {globalConfig} from '../common/utils/utils';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-API-Key': globalConfig.xApiKey })
};

const baseUrl = globalConfig.baseUrl;

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
    return this.http.post(`${baseUrl}login`, postData, httpOptions);
  }

  forgetPassword(postData) {
    return this.http.post(`${baseUrl}password/forgot`, postData, httpOptions);
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
