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
export class BlgService {

  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }



  saveInLocal(key, val): boolean {
    console.log('recieved= key:' + key + 'value:' + val);
    if (!val) {
      this.storage.remove(key);
    } else {
      this.storage.set(key, val);
    }
    return true;
  }


  getFromLocal(key): any {
    console.log('recieved= key:' + key);
    return this.storage.get(key);
  }


}
