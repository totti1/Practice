import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Quotes } from "../quotes";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  newQuote = new Quotes(1, "", "", new Date(), 0);
  @Output() passQuote = new EventEmitter<Quotes>();
  addTodo() {
    console.log(this.newQuote);
    this.passQuote.emit(this.newQuote);
    this.newQuote = new Quotes(1, "", "", new Date(), 0);
    // this.quotesArray.push(value);
    // console.log(this.todos)
  }
  constructor() {}

  ngOnInit() {}
}
