import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GolfclubService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getGolfclubs(): Observable<any> {
    return this.http.get('/api/golfclubs').map(res => res.json());
  }

  countGolfclubs(): Observable<any> {
    return this.http.get('/api/golfclubs/count').map(res => res.json());
  }

  addGolfclub(golfclub): Observable<any> {
    return this.http.post('/api/golfclub', JSON.stringify(golfclub), this.options);
  }

  // getGolfclub(golfclub): Observable<any> {
  //   return this.http.get(`/api/golfclub/${golfclub._id}`).map(res => res.json());
  // }

  getGolfclub(_id): Observable<any> {
    return this.http.get(`/api/golfclub/${_id}`).map(res => res.json());
  }

  editGolfclub(golfclub): Observable<any> {
    return this.http.put(`/api/golfclub/${golfclub._id}`, JSON.stringify(golfclub), this.options);
  }

  deleteGolfclub(golfclub): Observable<any> {
    return this.http.delete(`/api/golfclub/${golfclub._id}`, this.options);
  }

}