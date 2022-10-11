import { Injectable } from '@angular/core';
import { PetsRepository } from '../../repository';
import { Pet, PetStatus } from '../../model';

@Injectable()
export class PetsService {
  constructor(private petsRepository: PetsRepository) {}

  async getPets(status?: PetStatus): Promise<Pet[]> {
    const data = await this.petsRepository.getPets();
    if (status) {
      return data.filter((pet) => pet.status === status);
    } else {
      return data;
    }
  }
}
