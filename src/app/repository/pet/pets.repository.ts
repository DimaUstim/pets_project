import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../../model';

@Injectable()
export class PetsRepository {
  constructor(private httpClient: HttpClient) {}

  async getPets() {
    const res = await this.httpClient
      .get<Pet[]>('http://127.0.0.1:3000/api/list')
      .toPromise();
    return res || [];
  }
}
