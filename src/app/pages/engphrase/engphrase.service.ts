import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EngphraseService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getEngphrases(): Observable<any> {
    return this.http.get('/api/engphrases').map(res => res.json());
  }

  getSomeEngphrases(num): Observable<any> {
    return this.http.get('/api/engphrases2/'+num).map(res => res.json());
  }

  countEngphrases(): Observable<any> {
    return this.http.get('/api/engphrase/count').map(res => res.json());
  }

  addEngphrase(engphrase): Observable<any> {
    return this.http.post('/api/engphrase', JSON.stringify(engphrase), this.options);
  }

  // getEngphrase(engphrase): Observable<any> {
  //   return this.http.get(`/api/engphrase/${engphrase._id}`).map(res => res.json());
  // }

  getEngphrase(_id): Observable<any> {
    return this.http.get(`/api/engphrase/${_id}`).map(res => res.json());
  }

  editEngphrase(engphrase): Observable<any> {
    return this.http.put(`/api/engphrase/${engphrase._id}`, JSON.stringify(engphrase), this.options);
  }

  deleteEngphrase(engphrase): Observable<any> {
    return this.http.delete(`/api/engphrase/${engphrase._id}`, this.options);
  }

}