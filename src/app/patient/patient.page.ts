import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient/patient.service';
import { Patient } from '../model/patient.interface';

@Component({
  selector: 'app-patient',
  templateUrl: 'patient.page.html',
  styleUrls: ['patient.page.scss']
})
export class PatientPage implements OnInit {
  patient: Patient[] = [];

  constructor(private readonly pService: PatientService){}

  ngOnInit(){
    this.pService.getAll().toPromise().then(
      patient => this.patient = patient,
      error => console.error(error)
    );
  }
}
