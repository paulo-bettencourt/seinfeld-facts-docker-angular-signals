import { CommonModule } from '@angular/common';
import { Component, ElementRef, signal, ViewChild, WritableSignal } from '@angular/core';

import { factsAboutSeinfeld } from './quotes';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  facts = signal<string[]>(factsAboutSeinfeld);
  numberOfFacts = signal<number>(9);
  randomNumber: WritableSignal<number> = signal(0);
  @ViewChild('inputNewFact') inputFact!: ElementRef;

  constructor() {}

  factRandomizer() {
    this.randomNumber.set(Math.round(Math.random() * this.numberOfFacts()));
    console.log(this.randomNumber());
  }

  addNewFact() {
    const newFact = this.inputFact.nativeElement.value as string;
    this.facts.mutate((value) => value.push(newFact));
    this.numberOfFacts.update(value => value + 1);
    console.log("---> ", this.facts(), "numbeer ", this.numberOfFacts())
  }
}
