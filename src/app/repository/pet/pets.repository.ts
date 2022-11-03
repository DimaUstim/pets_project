import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../../model';

@Injectable()
export class PetsRepository {
  constructor(private httpClient: HttpClient) { }
  async getPets() {
    const res = await this.httpClient.get<any[]>('list').toPromise();

    let pets = res?.map((pet) => {
      pet.periodInfo = new Date(pet.periodInfo);
      return pet as Pet;
    });
    return pets || [];
  }

  async deletePet(id: any) {
    await this.httpClient.delete(id).toPromise();
  }
}
