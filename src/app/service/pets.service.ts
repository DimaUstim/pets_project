import { Injectable } from '@angular/core';
import { PetsRepository } from '../repository/pets.repository';

@Injectable()
export class PetsService {
  constructor(private petsRepository: PetsRepository) {}
  getPetsSmall() {
    return this.petsRepository.getPetsSmall().then((data) => {
      return data;
    });
  }
}
