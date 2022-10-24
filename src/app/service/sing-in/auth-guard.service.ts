import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import { SingInService } from "./sing-in.service";
import { SingInComponent } from '../../components/sing-in/sing-in.component';
import { OverlayService } from '../overlay/overlay.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private dialog: OverlayService, private singInService: SingInService, private router: Router) { };

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        let isLoggedIn = this.singInService.isUserLoggedIn;
        if (isLoggedIn) {
            return true;
        }
        this.dialog.open(SingInComponent, { data: `/${route.routeConfig?.path}` });
        return false;
    }
}
