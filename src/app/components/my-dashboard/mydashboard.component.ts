import { Component, OnInit } from '@angular/core';
import { Pet, PetStatus, PetGender } from '../../model';
import { PetsService, OverlayService } from '../../service';
import { MenuItem, MessageService } from 'primeng/api';
import { PopUpComponent } from '../popup/popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mydashboard',
  templateUrl: './mydashboard.component.html',
  styleUrls: ['./mydashboard.component.scss'],
  providers: [MessageService]
})
export class MydashboardComponent implements OnInit {
  pets: Pet[] = [];
  loading: boolean = true;
  activityValues: number[] = [0, 100];
  PetStatus = Object.values(PetStatus);
  PetGender = Object.values(PetGender);
  items: MenuItem[] = [];
  selectedPet?: Pet;

  constructor(private route: Router, private petsService: PetsService, private messageService: MessageService, private dialog: OverlayService) { }

  addPet() {
    this.route.navigate(['/petFormLost']);
  }

  globalFilter(event: any, dataTable: any) {
    dataTable.filterGlobal(event.target?.value, 'contains');
  }

  openContextMenu(event: any, cm: any, pet: any) {
    event.preventDefault();
    event.stopPropagation();
    cm.show(event);
    this.selectedPet = pet;
    return false;
  }

  ngOnInit(): void {
    this.petsService.getPets().then((pets) => {
      this.pets = pets;
      this.loading = false;
    });

    this.items = [
      {
        label: 'Edit', icon: 'pi pi-fw pi-pencil', command: () => {
          this.route.navigate(['/petFormLost']);
        }
      },
      {
        label: 'Delete', icon: 'pi pi-fw pi-times',
        command: () => {
          const dialogRef = this.dialog.open(PopUpComponent, {
            data: {
              title: 'Do you want to delete this pet?',
            },
            backdropClickClose: true,
          });
          dialogRef.afterClosed().subscribe((result) => {
            if (result) {
              this.deletePet(this.selectedPet);
            }
          });
        },
      }
    ];
  }

  async deletePet(selectedPet: any) {
    this.pets = this.pets.filter((p) => p.id !== selectedPet.id);
    await this.petsService.deletePet(selectedPet.id);
    this.messageService.add({ severity: 'info', summary: 'Pet Deleted', detail: selectedPet.name });
    this.showList();
  }
  showList() {
    this.petsService.getPets().then((pets) => {
      this.pets = pets;
      this.loading = false;
    });
  }
}

