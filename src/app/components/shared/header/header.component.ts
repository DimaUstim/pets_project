import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { OverlayService } from '../../../service';
import { SingInComponent } from '../../sing-in/sing-in.component';
import { SingInService } from '../../../service';
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

  singInBtn: MenuItem = {
    label: 'Sing in',
    icon: 'pi pi-fw pi-sign-in',
    command: () => {
      this.dialog.open(SingInComponent);
    },
  }

  logOutBtn: MenuItem = {
    label: 'Log out',
    icon: 'pi pi-fw pi-sign-out',
    command: () => {
      const dialogRef = this.dialog.open(PopUpComponent, {
        data: {
          title: 'Do you want to log out?',
          submitBtn: 'Yes',
          cancelBtn: 'No',
        },
        backdropClickClose: true,
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.singInService.logout();
          this.route.navigateByUrl('/');
        }
      });
    },
  }

  constructor(private dialog: OverlayService, private singInService: SingInService, private route: Router) { }

  ngOnInit(): void {
    this.singInService.userLoggedInData.subscribe((data) => {
      this.isLoggedIn = data ? true : false;
      this.items = Array.from(this.items);
      if (this.isLoggedIn) {
        this.items.pop();
        this.items.push(this.logOutBtn);
      }
      if (!this.isLoggedIn) {
        this.items.pop();
        this.items.push(this.singInBtn);
      }
    });

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
    ];

    this.items.push(this.singInBtn);
  }
}

