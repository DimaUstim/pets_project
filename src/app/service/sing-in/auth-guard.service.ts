import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import { SignInService } from "./sign-in.service";
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { OverlayService } from '../overlay/overlay.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private dialog: OverlayService, private signInService: SignInService, private router: Router) { };

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        let isLoggedIn = this.signInService.isUserLoggedIn;
        if (isLoggedIn) {
            return true;
        }
        this.dialog.open(SignInComponent, { data: `/${route.routeConfig?.path}` });
        return false;
    }
}
