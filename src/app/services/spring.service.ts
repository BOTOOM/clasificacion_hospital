import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const url = `http://3.15.181.188:8080/SaluApp/api/`;

@Injectable({
  providedIn: 'root'
})
export class SpringService {

  constructor(private http: HttpClient) {
    console.info('spring Service Listo');
   }

   get(endpoint: string) {
    return this.http.get(`${url}${endpoint}`);
  }
}
