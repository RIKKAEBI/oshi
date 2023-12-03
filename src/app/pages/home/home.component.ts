import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MoneyService } from '../../service/money.service';
import { ProgressComponent } from '../../modules/organisms/progress/progress.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ProgressComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  list: number[] = [...Array(100).keys()].map(i => i + 1)

  constructor (
    private moneyService: MoneyService
  ) { }

  ngOnInit (): void {
    this.moneyService.initializeStorage()
  }
}
