import { Injectable } from '@angular/core';
import { PetsRepository } from '../../repository/pet/pets.repository';

@Injectable()
export class PetsService {
  constructor(private petsRepository: PetsRepository) {}
  getPets() {
    return this.petsRepository.getPets().then((data) => {
      return data;
    });
  }
}
