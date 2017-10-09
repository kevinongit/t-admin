import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { EngphrasesComponent }    from './engphrases.component';
import { EngphrasesCreateComponent }  from './engphrases-create.component';
import { EngphraseService } from './engphrase.service'
import { EngphrasesPagination } from './engphrases-pagination';
import { routing } from './engphrases.routes';

import { NgaModule } from '../../theme/nga.module';
// import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    NgaModule
    // SharedModule
  ],
  declarations: [
    EngphrasesComponent,
    EngphrasesCreateComponent
  ],
  providers: [ EngphraseService, EngphrasesPagination ]
})
export class EngphrasesModule {}
