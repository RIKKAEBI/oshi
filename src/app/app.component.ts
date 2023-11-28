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

    // zoom の無効化
    document.addEventListener('touchstart', (event: any) => {
      if (event.touches.length > 1) event.preventDefault()
    }, { passive: false });

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
