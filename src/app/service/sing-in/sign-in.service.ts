import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../model';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private currentUserSbj = new BehaviorSubject<User | null>(null);

  constructor() { }

  login(user: User) {
    return this.currentUserSbj.next(user);
  }

  logout() {
    return this.currentUserSbj.next(null);
  }

  public get isUserLoggedIn(): boolean {
    return this.currentUserSbj.getValue() ? true : false;
  }

  public get userChanged() {
    return this.currentUserSbj.asObservable();
  }
}
