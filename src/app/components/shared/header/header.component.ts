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

  signInMenuItem: MenuItem = {
    label: 'Sign in',
    icon: 'pi pi-fw pi-sign-in',
    command: () => {
      this.dialog.open(SignInComponent);
    },
  }

  logOutMenuItem: MenuItem = {
    label: 'Log out',
    icon: 'pi pi-fw pi-sign-out',
    command: () => {
      const dialogRef = this.dialog.open(PopUpComponent, {
        data: {},
        backdropClickClose: true,
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.signInService.logout();
          this.route.navigateByUrl('/');
        }
      });
    },
  }

  constructor(private dialog: OverlayService, private signInService: SignInService, private route: Router) { }

  ngOnInit(): void {
    this.signInService.userLoggedInData.subscribe((data) => {
      this.isLoggedIn = data ? true : false;
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
}

