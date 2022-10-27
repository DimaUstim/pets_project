import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../model';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private currentUserSbj = new BehaviorSubject<User | null>(null);

  constructor() { }

  login(data: User) {
    return this.currentUserSbj.next(data as User);
  }

  logout() {
    return this.currentUserSbj.next(null);
  }

  public get isUserLoggedIn(): boolean {
    return this.currentUserSbj.getValue() ? true : false;
  }

  public get userLoggedInData() {
    return this.currentUserSbj.asObservable();
  }
}