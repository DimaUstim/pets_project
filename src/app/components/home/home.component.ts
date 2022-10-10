import { Component, OnInit } from '@angular/core';
import { Pet, PetStatus } from '../../model/index';
import { PetsService } from '../../service/index';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pets: Pet[] = [];
  currentPet?: Pet;
  responsiveOptions;
  displayBasic: boolean = false;
  PetStatus = PetStatus;

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

  filterPets(status: PetStatus) {
    this.petsService.filterPets(status).then((data) => {
      this.pets = data;
    });
  }

  ngOnInit() {
    this.petsService.getPets().then((pets) => {
      this.pets = pets;
    });
  }
}
