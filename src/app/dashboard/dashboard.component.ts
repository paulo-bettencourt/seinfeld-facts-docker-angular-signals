import { CommonModule } from '@angular/common';
import { Component, DoCheck, ElementRef, signal, ViewChild, WritableSignal } from '@angular/core';

import { factsAboutSeinfeld } from './quotes';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements DoCheck {
  facts = signal<string[]>(factsAboutSeinfeld);
  numberOfFacts = signal<number>(factsAboutSeinfeld.length - 1);
  mathRandomNumber: number = 0;
  randomNumber: WritableSignal<number> = signal(this.mathRandomNumber);
  @ViewChild('inputNewFact') inputFact!: ElementRef;

  ngDoCheck(): void {
    this.mathRandomNumber = Math.round(Math.random() * this.numberOfFacts());
  }

  factRandomizer() {
    this.randomNumber.set(this.mathRandomNumber);
    console.log(this.randomNumber());
  }

  addNewFact() {
    const newFact = this.inputFact.nativeElement.value as string;
    this.facts.mutate((value) => value.push(newFact));
    this.numberOfFacts.update(value => value + 1);
    console.log("---> ", this.facts(), "numbeer ", this.numberOfFacts())
  }
}
