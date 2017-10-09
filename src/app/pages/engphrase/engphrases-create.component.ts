import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EngphraseService }  from './engphrase.service';

@Component({
  templateUrl: './engphrases-create.component.html',
  styleUrls: ['./engphrases-create.component.scss']
})
export class EngphrasesCreateComponent implements OnInit {
  engphrase:any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EngphraseService
  ) {console.log('111');}
  ngOnInit() {
  }

}
