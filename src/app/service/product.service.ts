import { Injectable }    from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService{
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  constructor(private  http: Http){ }

  getProducts(): Observable<any> {
    return this.http.get('/api/prod/').map(res => res.json());
  }

  getFilter(type: string): Observable<any>{
    return this.http.get(`/api/prod/${type}`).map(res => res.json());
  }

  getDetail(name:string): Observable<any>{
    //console.log(name);
    return this.http.get(`/api/detail/${name}`)
    .map(res => res.json());
  }

  prodDelete(product): Observable<any>{
    return this.http.delete(`/api/prod/${product._id}`);
  }

  addProd(product): Observable<any>{
    console.log(JSON.stringify(product))
    return this.http.post(`/api/prod`, JSON.stringify(product), this.options)
  }

  editProd(product): Observable<any>{
    return this.http.put(`/api/prod/${product._id}`, JSON.stringify(product), this.options)
  }

}
