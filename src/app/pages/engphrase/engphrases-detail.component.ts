import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EngphraseService }  from './engphrase.service';

@Component({
  templateUrl: './engphrases-detail.component.html',
  styleUrls: ['./engphrases-detail.component.scss']
})
export class EngphrasesDetailComponent implements OnInit {
  engphrase:any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EngphraseService
  ) {console.log('111');}
  ngOnInit() {
      console.log('211');
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getEngphrase(params['_id']))
      .subscribe((engphrase) => this.engphrase = engphrase);
  }
//   gotoHeroes() {
//     let heroId = this.engphrase ? this.hero.id : null;
//     // Pass along the hero id if available
//     // so that the HeroList component can select that hero.
//     // Include a junk 'foo' property for fun.
//     this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
//   }
}
