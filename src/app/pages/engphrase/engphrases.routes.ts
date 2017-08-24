import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngphrasesComponent }    from './engphrases.component';
import { EngphrasesDetailComponent }  from './engphrases-detail.component';
const routes: Routes = [
  { path: '',  component: EngphrasesComponent },
  { path: ':_id', component: EngphrasesDetailComponent }
];
// @NgModule({
//   imports: [
//     RouterModule.forChild(engphrasesRoutes)
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class EngphrasesRoutes { }
export const routing = RouterModule.forChild(routes);
