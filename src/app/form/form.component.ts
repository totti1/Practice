import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  quotesArray = [];
  addTodo(value) {
    this.quotesArray.push(value);
    // console.log(this.todos)
  }
  constructor() {}

  ngOnInit() {}
}
