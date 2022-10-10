import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../../model';
import { BaseUrlInterceptor } from '../../interceptors/base-url-interceptor';

@Injectable()
export class PetsRepository {
  constructor(
    private httpClient: HttpClient,
    private baseUrlInterceptor: BaseUrlInterceptor
  ) {}

  async getPets() {
    const res = await this.httpClient
      .get<Pet[]>(this.baseUrlInterceptor.baseUrl)
      .toPromise();
    return res || [];
  }
}
