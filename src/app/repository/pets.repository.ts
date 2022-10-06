import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pets } from '../model/pets';

@Injectable()
export class PetsRepository {
  constructor(private httpClient: HttpClient) {}

  getPetsSmall() {
    return this.httpClient
      .get<any>('assets/pets-small.json')
      .toPromise()
      .then((res) => <Pets[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
