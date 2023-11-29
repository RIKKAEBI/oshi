import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconConfigComponent } from '../../atoms/icon-config/icon-config.component';
import { IconHomeComponent } from '../../atoms/icon-home/icon-home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [
    CommonModule,
    IconConfigComponent,
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
