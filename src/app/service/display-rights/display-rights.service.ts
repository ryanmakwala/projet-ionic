import { Injectable } from '@angular/core';
import { Tab } from 'src/app/model/tab.interface';

@Injectable({
  providedIn: 'root'
})
export class DisplayRightsService {

  constructor() { }

  getTabs(role: 'patient' | 'doctor'): Tab[] {
    return role === 'doctor' 
      ? [
        {icon: 'flash', label: 'accueil', name: 'home'},
        {icon: 'apps', label: 'patient', name: 'patient'},
        {icon: 'send', label: 'medicament', name: 'medicament'},
        {icon: 'flash', label: 'parametres', name: 'parametres'}
      ]
      : 
      [
        {icon: 'flash', label: 'accueil', name: 'home'},
        {icon: 'apps', label: 'prescriptions', name: 'prescriptions'},
        {icon: 'flash', label: 'parametres', name: 'parametres'}
      ];
  }
}
