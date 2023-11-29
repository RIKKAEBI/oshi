import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { User } from 'firebase/auth';
import { Subscription } from 'rxjs';
import { FirebaseService } from '../../service/firebase.service';
import { ProfileCardComponent } from '../../modules/organisms/profile-card/profile-card.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, RouterLink, ProfileCardComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  user: User | null | undefined = null

  subscription = new Subscription()

  constructor (
    private firebaseService: FirebaseService
  ) {
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
