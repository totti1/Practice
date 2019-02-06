import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Quotes } from "../quotes";

@Component({
  selector: "app-home-details",
  templateUrl: "./home-details.component.html",
  styleUrls: ["./home-details.component.css"]
})
export class HomeDetailsComponent implements OnInit {
  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  deleteQuote(complete: boolean) {
    this.isComplete.emit(complete);
  }
  Upvote() {
    this.quote.votes++;
  }
  Downvote() {
    this.quote.votes--;
  }
  constructor() {}

  ngOnInit() {}
}
