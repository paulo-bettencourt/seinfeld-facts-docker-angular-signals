import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

import { factsAboutSeinfeld } from './quotes';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  facts = signal(factsAboutSeinfeld);
  randomNumber: WritableSignal<number> = signal(0);

  constructor() {}

  factRandomizer() {
    this.randomNumber.set(Math.round(Math.random() * 9));
    console.log(this.randomNumber());
  }
}
