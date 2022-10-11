import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../../model';

@Component({
  selector: 'pet-description',
  templateUrl: './pet-description.component.html',
  styleUrls: ['./pet-description.component.scss'],
})
export class PetDescriptionComponent implements OnInit {
  @Input() currentPet?: Pet;
  visible: boolean = false;

  constructor() {}

  showDescription() {
    this.visible = true;
  }
  hideDescription() {
    this.visible = false;
  }

  ngOnInit(): void {}
}
