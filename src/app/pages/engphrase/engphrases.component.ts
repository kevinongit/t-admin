import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import * as _ from 'lodash';

import { EngphraseService } from './engphrase.service';
import { EngphrasesPagination } from './engphrases-pagination';

// import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-engphrases',
  templateUrl: './engphrases.component.html',
  styleUrls: ['./engphrases.component.scss']
})
export class EngphrasesComponent implements OnInit {

  engphrase = {};
  engphrases = [];
  pagedEngphrases = [];
  pager:any = {};
  isLoading = true;
  isEditing = false;

  addEngphraseForm: FormGroup;
  name = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  desc = new FormControl('', Validators.required);

  constructor(private engphraseService: EngphraseService,
              private engphrasesPagination: EngphrasesPagination,
              private formBuilder: FormBuilder,
              private http: Http,
              private router: Router,
              private route: ActivatedRoute
              // public toast: ToastComponent
            ) { }

  ngOnInit() {
    this.getEngphrases();
    this.addEngphraseForm = this.formBuilder.group({
      name: this.name,
      address: this.address,
      desc: this.desc
    });
  }

  getEngphrases() {
    this.engphraseService.getEngphrases().subscribe(
      data => { 
        this.engphrases = data;
        // initialize to page 1
        this.setPage(1);
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  doSearch(keyword: string) {
    console.log('doSearch : ' + keyword);
    this.pagedEngphrases = this.engphrases.filter(item => {
      if (item["name"].includes(keyword)) { return true; }
      return false;
    });
    console.log('this.pagedEngphrases.length = ' + this.pagedEngphrases.length);
    // this.setPage(1);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      console.log("setPage constrict (page:" + page + ")");
      return;
    }

    // get pager objedct object from service
    this.pager = this.engphrasesPagination.getPager(this.engphrases.length, page);
    console.log("this.pager.pages.length = " + this.pager.pages.length);
    // get current page of items
    this.pagedEngphrases = this.engphrases.slice(this.pager.startIndex, this.pager.endIndex+1);
    console.log("pagedEngphrases.length = " + this.pagedEngphrases.length);
  }

  addEngphrase() {
    this.engphraseService.addEngphrase(this.addEngphraseForm.value).subscribe(
      res => {
        const newEngphrase = res.json();
        this.engphrases.push(newEngphrase);
        this.addEngphraseForm.reset();
        // this.toast.setMessage('항목이 추가 되었습니다.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(engphrase) {
    this.isEditing = true;
    this.engphrase = engphrase;
  }

  cancelEditing() {
    this.isEditing = false;
    this.engphrase = {};
    // this.toast.setMessage('편집이 취소되었습니다.', 'warning');
    // reload the glofclubs to reset the editing
    this.getEngphrases();
  }

  editEngphrase(engphrase) {
    this.engphraseService.editEngphrase(engphrase).subscribe(
      res => {
        this.isEditing = false;
        this.engphrase = engphrase;
        // this.toast.setMessage('수정 되었습니다.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteEngphrase(engphrase) {
    if (window.confirm('삭제 하시겠습니까?')) {
      this.engphraseService.deleteEngphrase(engphrase).subscribe(
        res => {
          const pos = this.engphrases.map(elem => { return elem._id; }).indexOf(engphrase._id);
          this.engphrases.splice(pos, 1);
          // this.toast.setMessage('삭제 되었습니다.', 'success');
        },
        error => console.log(error)
      );
    }
  }

  onSelect(engphrase) {
    console.log('onSelect : '+ engphrase._id);
    console.log('route : ' + this.route);
    console.log('router.url : ' + this.router.url);
    this.router.navigate(['/pages/engphrase', engphrase._id]);
  }

}
