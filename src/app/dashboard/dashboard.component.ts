import { CommonModule } from '@angular/common';
import { Component, DoCheck, effect, ElementRef, signal, ViewChild, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { factsAboutSeinfeld } from './quotes';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatInputModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements DoCheck {
  facts = signal<string[]>(factsAboutSeinfeld);
  numberOfFacts = signal<number>(factsAboutSeinfeld.length - 1);
  mathRandomNumber: number = 0;
  randomNumber: WritableSignal<number> = signal(this.mathRandomNumber);
  @ViewChild('inputNewFact') inputFact!: ElementRef;
  isAddTrivia: boolean = false;

  constructor() {
    effect(() => {
      console.log(`The current count is: ${this.numberOfFacts()}`);
    });
  }

  ngDoCheck(): void {
    this.mathRandomNumber = Math.round(Math.random() * this.numberOfFacts());
  }

  addTrivia(): void {
    this.isAddTrivia = !this.isAddTrivia;
  }

  addNewFact() {
    const newFact = this.inputFact.nativeElement.value as string;
    this.facts.mutate((value) => value.push(newFact));
    this.numberOfFacts.update(value => value + 1);
  }

  factRandomizer() {
    this.randomNumber.set(this.mathRandomNumber);
  }


}
