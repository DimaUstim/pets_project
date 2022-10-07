import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../service/pets.service';
import { Pet } from '../../model/pet';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pets: Pet[] = [];
  totalPets: Pet[] = [];
  currentPet?: Pet;
  responsiveOptions;
  status1: string = 'Found';
  status2: string = 'Lost';
  displayBasic: boolean = false;

  constructor(private petsService: PetsService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  showBasicDialog(pets: any) {
    this.currentPet = pets;
    this.displayBasic = true;
  }

  filterFoundPets() {
    this.pets = this.totalPets.filter((pet) => pet.status === this.status1);
    console.log(this.pets);
  }
  filterLostPets() {
    this.pets = this.totalPets.filter((pet) => pet.status === this.status2);
    console.log(this.pets);
  }

  ngOnInit() {
    this.petsService.getPets().then((pets) => {
      this.pets = pets;
      this.totalPets = pets;
    });
  }
}
