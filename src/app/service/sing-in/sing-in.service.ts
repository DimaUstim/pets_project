import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../model';

@Injectable({
  providedIn: 'root'
})
export class SingInService {

  private currentUserSbj = new BehaviorSubject<User | null>(null);

  constructor() { }

  login(data?: User) {

    return this.currentUserSbj.next(data as User);
  }

  public get isUserLoggedIn(): boolean {
    return this.currentUserSbj.getValue() ? true : false;
  }
}

