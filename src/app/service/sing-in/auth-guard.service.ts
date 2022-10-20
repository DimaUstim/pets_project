import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import { SingInService } from "./sing-in.service";


@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private singInService: SingInService, private router: Router) { };

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        let isLoggedIn = this.singInService.isUserLoggedIn;
        if (isLoggedIn) {

            return true;

        } else {

            return false;
        }


    }
}
