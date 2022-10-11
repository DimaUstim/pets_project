import { Component, OnInit } from '@angular/core';
import { Pet, PetStatus } from '../../model';
import { PetsService } from '../../service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pets: Pet[] = [];
  currentPet?: Pet;
  responsiveOptions;
  visible: boolean = false;
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

  showDialog(pet: any) {
    this.currentPet = pet;
    this.visible = true;
  }
  hideDialog() {
    this.visible = false;
  }

  getPets(status: PetStatus) {
    this.petsService.getPets(status).then((data) => {
      this.pets = data;
    });
  }

  ngOnInit() {
    this.petsService.getPets().then((pets) => {
      this.pets = pets;
    });
  }
}
