import { Injectable } from '@angular/core';
import { PetsRepository } from '../../repository/index';
import { Pet, PetStatus } from '../../model/index';

@Injectable()
export class PetsService {
  constructor(private petsRepository: PetsRepository) {}
  async getPets() {
    const data = await this.petsRepository.getPets();
    return data;
  }

  async filterPets(status: PetStatus): Promise<Pet[]> {
    const data = await this.petsRepository.getPets();
    return data.filter((pet) => pet.status === status);
  }
}
