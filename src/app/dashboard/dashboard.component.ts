import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  factsAboutSeinfeld = [
    "Seinfeld' is a popular American sitcom that aired from 1989 to 1998, created by Larry David and Jerry Seinfeld.",
    "The show is famously known as 'a show about nothing' because it revolves around the everyday lives and conversations of four main characters.",
    "The main characters in Seinfeld are Jerry Seinfeld (played by Jerry Seinfeld), George Costanza (played by Jason Alexander), Elaine Benes (played by Julia Louis-Dreyfus), and Cosmo Kramer (played by Michael Richards).",
    "'Seinfeld' was set in New York City, primarily focusing on the characters' experiences in Jerry's apartment and the fictional Monk's Café.",
    "The show's catchphrase 'Yada, yada, yada' became widely popular and is often used to skip over irrelevant details or summarize a story.",
    "Seinfeld has won several Emmy Awards, including Outstanding Comedy Series, during its nine-season run.",
    "The character of Kramer was inspired by a real-life neighbor of co-creator Larry David, also named Kramer.",
    "Seinfeld featured many memorable episodes, including 'The Soup Nazi,' 'The Contest,' and 'The Marine Biologist.'",
    "Jerry Seinfeld turned down an offer of $5 million per episode to continue the show for a tenth season.",
    "Seinfeld's series finale, titled 'The Finale,' aired on May 14, 1998, and was watched by over 76 million viewers.",
]

constructor() {
  const count = signal(0);

// Signals are getter functions - calling them reads their value.
console.log('The count is: ' + count());
}


}
