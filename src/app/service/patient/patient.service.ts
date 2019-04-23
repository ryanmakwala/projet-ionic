import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private readonly api: ApiService) { }

  getAll(): Observable<any> {
    return null;
  }

  getOne(id: number): Observable<any> {
    return null;
  }
}
