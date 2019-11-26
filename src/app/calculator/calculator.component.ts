import { Component } from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"]
})
export class CalculatorComponent {
  result: string = "";
  bigButtons: string[] = ["AC", "CE"];
  buttons: string[][] = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    [".", "0", "=", "+"]
  ];

  private lastValue: string = "";
  private currentValue: string = "";

  numLogic(value: string) {
    if (this.result != "") {
      this.lastValue = this.currentValue;
      this.lastValue = value;
    }
    if (value === "AC") {
      this.result = "";
    } else if (value === "CE") {
      this.result =
        this.lastValue != "=" ? this.result.slice(0, -1) : this.result;
    } else if (value === "=") {
      this.result = eval(this.result);
    } else {
      this.result += value;
    }
  }
}
