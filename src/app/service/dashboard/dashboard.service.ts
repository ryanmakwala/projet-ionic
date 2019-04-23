import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private readonly api: ApiService) { }

  getLatestPrescription(): Observable<any> {
    return this.api.get('prescriptions/latest');
  }

  setMainDoctor(id: number): Observable<any> {
    return null;
  }

  getUser(id: number): Observable<any> {
    return null;
  }
  
}
