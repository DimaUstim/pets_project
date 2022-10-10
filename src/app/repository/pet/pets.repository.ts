import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../../model';

@Injectable()
export class PetsRepository {
  constructor(private httpClient: HttpClient) {}

  async getPets() {
    const res = await this.httpClient.get<Pet[]>('list').toPromise();
    return res || [];
  }
}
