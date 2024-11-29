import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'searchcases',
    loadChildren: () => import('./pages/searchcases/searchcases.module').then( m => m.SearchcasesPageModule)
  },
  {
    path: 'globalcases',
    loadChildren: () => import('./pages/globalcases/globalcases.module').then( m => m.GlobalcasesPageModule)
  },
  {
    path: 'emergency',
    loadChildren: () => import('./pages/emergency/emergency.module').then( m => m.EmergencyPageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
