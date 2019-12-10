import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalConfirmComponent } from "./modal-confirm/modal-confirm.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-material";
  response = "";

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      data: {
        title: "Confirmation example",
        body: "Do you want to marry me?"
      }
    });

    dialogRef
      .afterClosed()
      .subscribe(resp => (this.response = resp ? "Yes" : "No"));
  }
}
