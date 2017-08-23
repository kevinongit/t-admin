import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GolfclubService }  from './golfclub.service';

@Component({
  templateUrl: './golfclubs-detail.component.html',
  styleUrls: ['./golfclubs-detail.component.scss']
})
export class GolfclubsDetailComponent implements OnInit {
  golfclub:any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GolfclubService
  ) {console.log('111');}
  ngOnInit() {
      console.log('211');
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getGolfclub(params['_id']))
      .subscribe((golfclub) => this.golfclub = golfclub);
  }
//   gotoHeroes() {
//     let heroId = this.golfclub ? this.hero.id : null;
//     // Pass along the hero id if available
//     // so that the HeroList component can select that hero.
//     // Include a junk 'foo' property for fun.
//     this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
//   }
}
