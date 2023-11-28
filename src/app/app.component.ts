import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirebaseService } from './service/firebase.service';
import { User } from 'firebase/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user: User | null | undefined = null

  subscription = new Subscription()

  constructor (
    private firebaseService: FirebaseService
  ) {
    this.firebaseService.initialize()

    this.subscription.add(
      this.firebaseService.user$.subscribe(user => {
        this.user = user
      })
    )
  }

  onSignInPopupOpen () {
    this.firebaseService.googleSignInWithPopup()
  }

  onSignOut () {
    this.firebaseService.googleSignOut()
  }
}
