import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }
  
  
  get(route: string, input?: any): Observable<any> {
    const uri = `${environment.apiUrl}/${route}`;
    //TODO enrich generic http get method to handle input params
    return this.http.get(uri);
  }

  post(route: string, input?:any): Observable<any> {
    const uri = `${environment.apiUrl}/${route}`;
    //TODO enrich generic http post method to handle input params
    return this.http.post(uri, input);
  }

  
}
