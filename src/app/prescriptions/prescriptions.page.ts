import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.page.html',
  styleUrls: ['./prescriptions.page.scss'],
})
export class PrescriptionsPage {
  public items: any = [];

  constructor(public navCtrl: NavController, public http: Http) {}
  ionViewWillEnter() {this.load(); }
  // Retrieve the JSON encoded data from the remote server
  // Using Angular's Http class and an Observable - then
  // assign this to the items array for rendering to the HTML template

  load() {
    this.http.get('http://localhost/CoursPHP/retrieve-data.php')
    .pipe(map(res => res.json()))
    .subscribe(data => {this.items = data; });
  }

  // Allow navigation to the Prescriptions page for creating a new ent
  addEntry() {
    this.navCtrl.navigateForward('Prescriptions');
  }

  // Allow navigation to the Prescriptions page for amending an existing
  // (We supply the actual record to be amended, as this method's parameters
  // to the Prescriptions page
  viewEntry(param) {
    this.navCtrl.navigateForward('Prescriptions', param);
  }
}
