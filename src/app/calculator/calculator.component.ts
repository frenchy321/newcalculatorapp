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

  private initalValue: string = "";
  private currentValue: string = "";
}
