import { Component, OnInit, ViewChild } from '@angular/core';
import { Pet, PetStatus } from '../../model';
import { PetsService } from '../../service';
import { PetDescriptionComponent } from '../pet-description/pet-description.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(PetDescriptionComponent) petDescription!: PetDescriptionComponent;

  pets: Pet[] = [];
  responsiveOptions;
  PetStatus = PetStatus;
  currentPet?: Pet;
  displayBasic: boolean = true;

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

  showBasicDialog(pet: any) {
    this.currentPet = pet;
    this.petDescription.showDescription();
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
