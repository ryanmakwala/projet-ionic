import { Component } from '@angular/core';
import { Patient } from '../model/patient.interface';
import { PatientService } from '../service/patient/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: 'patient.page.html',
  styleUrls: ['patient.page.scss']
})
export class PatientPage {
  patient: Patient[] = [];

  constructor(private readonly pService: PatientService) {}

  ionViewWillEnter() {
    this.pService.getAll().toPromise().then(
      patient => this.patient = patient,
      error => console.error(error)
    );
  }
}
