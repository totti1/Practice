import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Quotes } from "../quotes";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  quotes = [
    new Quotes(
      1,
      "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
      "John Keats",
      new Date(2018, 3, 14),
      0
    ),
    new Quotes(
      2,
      "But man is not made for defeat. A man can be destroyed but not defeated.",
      "Ernest Hemingway",
      new Date(2018, 6, 9),
      0
    ),
    new Quotes(
      3,
      "When you reach the end of your rope, tie a knot in it and hang on.",
      "Franklin D. Roosevelt",
      new Date(2018, 1, 12),
      0
    ),
    new Quotes(
      4,
      "There is nothing permanent except change.",
      "Heraclitus",
      new Date(2018, 3, 14),
      0
    ),
    new Quotes(
      5,
      "You cannot shake hands with a clenched fist.",
      "Indira Gandhi",
      new Date(2018, 0, 18),
      0
    ),
    new Quotes(
      6,
      "Let us sacrifice our today so that our children can have a better tomorrow.",
      "A. P. J. Abdul Kalam",
      new Date(2018, 2, 14),
      0
    )
  ];
  newQuotes = [];
  @Output() addQuotes = new EventEmitter<Quotes>();
  submitQuote(item) {
    let quoteLength = this.quotes.length;
    item.id = quoteLength + 1;
    this.quotes.push(item);
    // this.addQuotes.emit();
  }
  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  delete(isComplete, index) {
    let toDelete = confirm(
      `Are you sure you want to delete ${
        this.quotes[index].quoteCreator
      } Quotes`
    );
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit() {}
}
