import { Component, OnInit } from '@angular/core';
import { Pet, PetStatus } from '../../model';
import { PetsService, OverlayService } from '../../service';
import { PetDescriptionComponent } from '../pet-description/pet-description.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pets: Pet[] = [];
  responsiveOptions;
  PetStatus = PetStatus;

  constructor(
    private petsService: PetsService,
    private dialog: OverlayService
  ) {
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
    const dialogRef = this.dialog.open(PetDescriptionComponent, {
      data: pet,
      backdropClickClose: true,
    });
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
