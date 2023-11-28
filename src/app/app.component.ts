import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirebaseService } from './service/firebase.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor (
    private firebaseService: FirebaseService
  ) { }

  ngOnInit (): void {
    this.firebaseService.initialize()

    // zoom の無効化
    document.addEventListener('touchstart', (event: any) => {
      if (event.touches.length > 1) event.preventDefault()
    }, { passive: false });
  }
}
