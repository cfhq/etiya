import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NotificationsService } from '../shared/notifications/notifications.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  isAdmin$: Observable<boolean>;
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private notifications: NotificationsService
  ) {
    this.isAdmin$ = this.afAuth.authState.pipe(
      switchMap(user => user
        ? of(true)
        : of(null))
    );
  }

  getAuth() {
    return this.afAuth.authState;
  }

  login(username: string, password: string) {
    return from(this.afAuth.auth.signInWithEmailAndPassword(username, password));
  }

  logout() {
    this.router.navigate(['/']);
    this.notifications.successNotification('Successfully logout');
    return this.afAuth.auth.signOut();
  }
}
