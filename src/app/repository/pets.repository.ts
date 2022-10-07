import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../model/pet';

@Injectable()
export class PetsRepository {
  constructor(private httpClient: HttpClient) {}

  getPets() {
    return this.httpClient
      .get<Pet[]>('http://127.0.0.1:3000/api/list')
      .toPromise()
      .then((res) => res || []);
  }
}
