import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GolfclubsComponent }    from './golfclubs.component';
import { GolfclubsDetailComponent }  from './golfclubs-detail.component';
const routes: Routes = [
  { path: '',  component: GolfclubsComponent },
  { path: ':_id', component: GolfclubsDetailComponent }
];
// @NgModule({
//   imports: [
//     RouterModule.forChild(golfclubsRoutes)
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class GolfclubsRoutes { }
export const routing = RouterModule.forChild(routes);
