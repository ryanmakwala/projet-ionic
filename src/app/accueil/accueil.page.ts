import { Component } from '@angular/core';
import { UserInfo } from '../model/user-info.interface';

@Component({
  selector: 'app-accueil',
  templateUrl: 'accueil.page.html',
  styleUrls: ['accueil.page.scss']
})
export class AccueilPage {
  
  user: UserInfo = {id: 0, firstName: 'test', lastName: 'test4', role: 'patient'};
  doctorNoPrescriptionTxt = 'Vous n\'avez pas encore prescrit de médicament';
  patientNoPrescriptionTxt = 'Aucune prescription ne vous a été faite pour le moment';
  
  constructor() {}

}
