import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})
export class NavigateComponent {
  constructor(
    private router: Router
  ) { }

  onNavigate($even: MouseEvent, path: string): void {
    $even.preventDefault()
    this.router.navigateByUrl(path)
  }
}
