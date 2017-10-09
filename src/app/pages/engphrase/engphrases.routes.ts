import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngphrasesComponent }    from './engphrases.component';
import { EngphrasesCreateComponent }  from './engphrases-create.component';
const routes: Routes = [
  { path: '',  component: EngphrasesComponent },
  { path: '/create', component: EngphrasesCreateComponent }
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
