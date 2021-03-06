import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn = new BehaviorSubject(false);
  public isUserLoggedIn$: Observable<boolean> = this.isUserLoggedIn.asObservable();

  public checkCredentials(username: string, password: string) {
    if (username === 'demo' && password === 'demo') {
      this.isUserLoggedIn.next(true);
    }
  }

  public logout() {
    this.isUserLoggedIn.next(false);
  }

}
