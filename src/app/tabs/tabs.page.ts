import { Component, OnInit } from '@angular/core';
import { Tab } from '../model/tab.interface';
import { UserInfo } from '../model/user-info.interface';
import { DisplayRightsService } from '../service/display-rights/display-rights.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  user: UserInfo = {id: 0, firstName: 'test', lastName: 'test4', role: 'doctor'};
  tabs: Tab[] = this.displayRightsService.getTabs(this.user.role);

  constructor(private readonly displayRightsService: DisplayRightsService) {}

  ngOnInit() {
  }
}
