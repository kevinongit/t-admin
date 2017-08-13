import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
// import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
// import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

// import { SharedModule } from '../shared/shared.module';

import { boxofficeReducer } from './reducers/boxoffice.reducer'
import { BoxofficeEffects } from './effects/boxoffice.effects'
import { BoxofficeComponent } from './boxoffice.component'
import { MovieListComponent } from './movie-list.component'
import { MovieDetailComponent } from './movie-detail.component'
import { MovieService } from './services/movie.service'

import { routing } from './boxoffice.routes'

// import {TopNavComponent, SidebarComponent } from '../shared/index';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        routing,
    	// DropdownModule,
        // ModalModule,
        // SharedModule,
        StoreModule.provideStore({
            boxoffice: boxofficeReducer
        }),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        EffectsModule.run(BoxofficeEffects)
    ],
    declarations: [ BoxofficeComponent, MovieListComponent, MovieDetailComponent ],
    providers: [ MovieService ],
    exports: [ BoxofficeComponent, MovieListComponent, MovieDetailComponent ]
})

export class BoxofficeModule { }
