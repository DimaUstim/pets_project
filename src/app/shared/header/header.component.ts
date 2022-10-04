import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        routerLink: [''],
        icon: 'pi pi-fw pi-home',
      },
      {
        label: 'I Found Pet',
        routerLink: ['/petFormFound'],
      },
      {
        label: 'I Lost Pet',
        routerLink: ['/petFormLost'],
      },
      {
        label: 'Pets',
        routerLink: ['/pets'],
      },
      {
        label: 'My Dashboard',
        routerLink: ['/myDashboard'],
      },
      {
        label: 'Sing in',
        routerLink: ['/singIn'],
        icon: 'pi pi-fw pi-sign-in',
      },
    ];
  }
}
