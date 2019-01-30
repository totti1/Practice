import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Quotes } from "../quotes";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  quotes = [new Quotes(1, "mamamama", "lili")];
  newQuotes = [];
  @Output() addQuotes = new EventEmitter<Quotes>();
  submitQuote(item) {
    let quoteLength = this.quotes.length;
    item.id = quoteLength + 1;
    this.quotes.push(item);
    // this.addQuotes.emit();
  }
  constructor() {}

  ngOnInit() {}
}
