import { BASE_URL } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class GenderizeService {

  readonly number_uri: number;

  constructor(private http: Http ) { }


  public GetHttp(num:number): Observable<any>
  {
    const url =`${BASE_URL}/${num}`;
    console.log(url);
    return this.http.get(url)
      //.map(resp=>resp.json());
  }

}

