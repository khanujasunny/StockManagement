import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { globalConfig } from '../common/utils/utils';
import { BehaviorSubject } from 'rxjs';



let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-Key': globalConfig.xApiKey
  })
};

const baseUrl = globalConfig.baseUrl;


@Injectable({
  providedIn: 'root'
})
export class BlgService {



  userInfo = new BehaviorSubject(null);

  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    httpOptions.headers.append('aaaa', 'ssss');
    this.userInfo.subscribe(info => {
      if (info) {
        httpOptions.headers = httpOptions.headers.append('Authorization', info['authtoken']);
      }
    });
  }


  deleteAPI(APIurl: any) {
    return this.http.delete(`${baseUrl}${APIurl}`, httpOptions);
  }
  getAPI(APIurl: any) {
    return this.http.get(`${baseUrl}${APIurl}`, httpOptions);
  }

  postAPI(APIurl: any, data: any) {
    return this.http.post(`${baseUrl}${APIurl}`, data, httpOptions);
  }

  catagoriesGetList() {
    return this.http.get(`${baseUrl}categories`, httpOptions);
  }


  saveInLocal(key, val): boolean {
    if (!val) {
      this.storage.remove(key);
    } else {
      this.storage.set(key, val);
    }
    return true;
  }


  getFromLocal(key): any {
    return this.storage.get(key);
  }


}
