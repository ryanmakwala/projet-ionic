import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { NgxWebstorageModule } from 'ngx-webstorage';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    NgxWebstorageModule.forRoot(),
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
