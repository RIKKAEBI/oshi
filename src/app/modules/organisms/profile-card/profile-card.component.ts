import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-profile-card[user]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  @HostBinding('class.g-shadow')
  @Input() user!: User
}
