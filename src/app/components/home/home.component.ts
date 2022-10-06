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
  currentPet?: Pet;
  responsiveOptions;
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

  ngOnInit() {
    this.petsService.getPetsSmall().then((pets) => {
      this.pets = pets;
    });
  }
}
