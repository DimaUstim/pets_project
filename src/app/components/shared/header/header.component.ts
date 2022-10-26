import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { OverlayService } from '../../../service';
import { SingInComponent } from '../../sing-in/sing-in.component';
import { SingInService } from '../../../service';
import { PopPapComponent } from '../../pop-pap/pop-pap.component';
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
      const dialogRef = this.dialog.open(PopPapComponent, {
        data: {
          title: 'Do you want to log out?',
          btnLabel1: 'Yes',
          btnLabel2: 'No',
        },
        backdropClickClose: true,
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.singInService.login();
          this.route.navigateByUrl('/');
        }
      });

    },
  }

  constructor(private dialog: OverlayService, private singInService: SingInService, private route: Router) { }

  ngOnInit(): void {
    this.singInService.isUserLoggedIn$.subscribe((data) => {
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
      {
        label: 'Sing in',
        icon: 'pi pi-fw pi-sign-in',
        command: () => {
          this.dialog.open(SingInComponent);
        },
      },
    ];
  }
}

