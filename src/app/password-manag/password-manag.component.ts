import { Component, OnInit } from "@angular/core";
import { style, animate, transition, keyframes, trigger} from "@angular/core";
import { TableEntry, initialEntries } from "./password-manager.array";
// import * as CryptoJS from "crypto-js";

//const userpass = "asdfSchule28";

@Component({
  selector: "app-password-manag",
  templateUrl: "./password-manag.component.html",
  styleUrls: ["./password-manag.component.css"],
  animations: [trigger("todoAnimation", [
      transition(":enter", [
        animate("400ms", keyframes([
          style({opacity: 0, transform: "translateY(-100%)", offset: 0}),
          style({opacity: 0.5, transform: "translateY(15px)",  offset: 0.3}),
          style({opacity: 1, transform: "translateY(0)",     offset: 1.0})
        ]))
      ]),
      transition(":leave", [
        style({"transform-origin": "100% 100%"}),
        animate("400ms", keyframes([
          style({opacity: 1, transform: "translateX(-15px)",  offset: 0.3}),
          style({opacity: 0, transform: "translateX(100%)",     offset: 1.0})

        ]))
      ])
    ])],
})
export class PasswordManagComponent implements OnInit {
  tabledata: TableEntry[] = [];

  constructor() {
    this.tabledata = [];
    this.tabledata = initialEntries;
  }

  // tslint:disable-next-line:no-empty
  ngOnInit() {}

  createPasswordEntry(zweck: string, user: string, password: string) {
    const entry = new TableEntry();
    entry.zweck = zweck;
    entry.user = user;
    // entry.secret = CryptoJS.AES.encrypt(password, userpass).toString();
    this.tabledata.push(entry);
    console.log("Secret",entry.secret);
  }

  deletpassword(row: TableEntry) {
    this.tabledata = this.tabledata.filter(row_ =>  row_ !== row);
  }
}

