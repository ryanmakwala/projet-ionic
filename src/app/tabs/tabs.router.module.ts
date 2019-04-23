import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../accueil/accueil.module#AccueilPageModule'
          }
        ]
      },
      {
        path: 'patient',
        children: [
          {
            path: '',
            loadChildren: '../patient/patient.module#PatientPageModule'
          }
        ]
      },
      {
        path: 'medicament',
        children: [
          {
            path: '',
            loadChildren: '../medicament/medicament.module#MedicamentPageModule'
          }
        ]
      },
      {
        path: 'prescriptions',
        children: [
          {
            path: '',
            loadChildren: '../prescriptions/prescriptions.module#PrescriptionsPageModule'
          }
        ]
      },
      {
        path: 'parametres',
        children: [
          {
            path: '',
            loadChildren: '../parametres/parametres.module#ParametresPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/accueil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
