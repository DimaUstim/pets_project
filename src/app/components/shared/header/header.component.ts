import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { OverlayService } from '../../../service';
import { SignInComponent } from '../../sign-in/sign-in.component';
import { SignInService } from '../../../service';
import { PopUpComponent } from '../../popup/popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  isLoggedIn: boolean = false;
  signInMenuItem!: MenuItem;
  logOutMenuItem!: MenuItem;

  constructor(private dialog: OverlayService, private signInService: SignInService, private route: Router) {
    this.initMenuItems();
  }

  initMenuItems() {
    this.signInMenuItem = {
      label: 'Sign in',
      icon: 'pi pi-fw pi-sign-in',
      command: () => {
        this.dialog.open(SignInComponent);
      },
    }

    this.logOutMenuItem = {
      label: 'Log out',
      icon: 'pi pi-fw pi-sign-out',
      command: () => {
        const dialogRef = this.dialog.open(PopUpComponent, {
          data: {
            title: 'Do you want to log out?',
          },
          backdropClickClose: true,
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.signInService.logout();
            this.route.navigate(['']);
          }
        });
      },
    }

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
      this.signInMenuItem,
    ];
  }

  ngOnInit(): void {
    this.signInService.userChanged.subscribe((user) => {
      this.isLoggedIn = user ? true : false;
      this.items = Array.from(this.items);
      if (this.isLoggedIn) {
        this.items.pop();
        this.items.push(this.logOutMenuItem);
      }
      if (!this.isLoggedIn) {
        this.items.pop();
        this.items.push(this.signInMenuItem);
      }
    });
  }
}