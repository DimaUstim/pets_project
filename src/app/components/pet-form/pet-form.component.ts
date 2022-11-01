import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { MessageService } from 'primeng/api';

@Component({
  selector: 'pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.scss'],
  providers: [MessageService]
})

export class PetFormComponent implements OnInit {

  stateOptions: any[];
  PetStatus: string = "Found";
  PetType: any[];
  PetGender: any[];
  Calendar: any;

  uploadedFiles: any[] = [];


constructor(private messageService: MessageService) {
  
  this.stateOptions = [
    {label: 'Found', value: 'Found'}, 
    {label: 'Lost', value: 'Lost'}
  ];

  this.PetType = [
    { name: 'Cat' },
    { name: 'Dog' },
    { name: 'Bird' },
    { name: 'Rodent' },
    { name: 'Snake' },
    { name: 'Other' }
];

this.PetGender = [
  { name: 'Female' },
  { name: 'Male' },
];

}




ngOnInit(): void {}
}

