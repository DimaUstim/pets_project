import { Injectable } from '@angular/core';
import { PetsRepository } from '../../repository/pet/pets.repository';
import { Pet, PetStatus } from '../../model';

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
