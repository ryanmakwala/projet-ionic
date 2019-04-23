import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NativeService {

  //boolean that check if it is a mobile support 
  isMobile = false;

  constructor() { }

  showNotification(isMobile: boolean): Observable<any>{
    return null;
  }
  
  
  
}
