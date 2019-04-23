import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }
  
  
  get(route: string, input?: any): Observable<any> {
    const uri = `${environment.apiUrl}/${route}`;
    //TODO implement generic http get method
    return null;
  }

  post(route: string, input?:any): Observable<any> {
    const uri = `${environment.apiUrl}/${route}`;
    //TODO implement generic http post method
    return null;
  }

  
}
