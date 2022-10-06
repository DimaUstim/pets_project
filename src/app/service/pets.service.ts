import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Pets } from '../model/pets';

@Injectable()
export class PetsService {
  constructor(private http: HttpClient) {}

  getProductsSmall() {
    return this.http
      .get<any>('assets/products-small.json')
      .toPromise()
      .then((res) => <Pets[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
