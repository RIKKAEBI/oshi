import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconHomeComponent } from '../../atoms/icon-home/icon-home.component';
import { Router } from '@angular/router';
import { IconSettingsComponent } from '../../atoms/icon-settings/icon-settings.component';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [
    CommonModule,
    IconSettingsComponent,
    IconHomeComponent,
  ],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})
export class NavigateComponent {
  constructor (
    private router: Router
  ) {}

  onNavigate ($even: MouseEvent, path: string): void {
    $even.preventDefault()
    this.router.navigateByUrl(path)
  }
}
