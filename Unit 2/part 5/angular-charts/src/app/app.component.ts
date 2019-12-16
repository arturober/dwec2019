import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  legend = "Fruits exports";
  view = [600, 400]; // Size (undefined -> parent container size)
  data: { name: string; value: number }[] = [
    {
      name: "Banana",
      value: 2000
    },
    {
      name: "Apple",
      value: 3500
    }
  ];
  newFruit: { name: string; value: number } = {
    name: "",
    value: 0
  };
  onSelect(result) {
    console.log(result);
  }
  addFruit() {
    // We can't do a push, we need to replace the array
    this.data = [...this.data, this.newFruit];
    this.newFruit = { name: "", value: 0 };
  }
}
