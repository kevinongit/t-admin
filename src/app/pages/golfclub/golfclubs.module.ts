import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { GolfclubsComponent }    from './golfclubs.component';
import { GolfclubsDetailComponent }  from './golfclubs-detail.component';
import { GolfclubService } from './golfclub.service'
import { GolfclubsPagination } from './golfclubs-pagination';
import { GolfclubsRoutes } from './golfclubs.routes';
// import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GolfclubsRoutes,
    // SharedModule
  ],
  declarations: [
    GolfclubsComponent,
    GolfclubsDetailComponent
  ],
  providers: [ GolfclubService, GolfclubsPagination ]
})
export class GolfclubsModule {}
