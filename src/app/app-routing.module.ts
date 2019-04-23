import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'menu', loadChildren: './page/menu/menu.module#MenuPageModule' },
  { path: 'first', loadChildren: './page/first/first.module#FirstPageModule' },
  { path: 'second', loadChildren: './page/second/second.module#SecondPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
