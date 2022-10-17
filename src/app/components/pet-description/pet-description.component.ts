import { Component, Inject } from '@angular/core';
import { DialogRef } from '../../service';
import { DIALOG_DATA } from '../../service';
import { Pet } from '../../model';

@Component({
  selector: 'pet-description',
  templateUrl: './pet-description.component.html',
  styleUrls: ['./pet-description.component.scss'],
})
export class PetDescriptionComponent {
  currentPet: Pet | undefined;

  constructor(
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: any
  ) {
    this.currentPet = data;
  }

  close() {
    this.dialogRef.close();
  }
}
