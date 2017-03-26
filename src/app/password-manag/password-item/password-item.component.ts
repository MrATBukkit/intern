import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TableEntry, initialEntries} from "../password-manager.array";
//import * as CryptoJS from "crypto-js";

const userpass = "asdfSchule28";

@Component({
  selector: "[password-item]",
  templateUrl: "./password-item.component.html",
  styleUrls: ["./password-item.component.css"]
})
export class PasswordItemComponent implements OnInit {

  displaypassword = "";

  @Input() row: TableEntry;
  @Output() deletpassword = new EventEmitter();

  // tslint:disable-next-line:no-empty
  constructor() {
  }

  ngOnInit() {
    //var encrypted = CryptoJS.AES.encrypt("Schule28", userpass).toString();
    //console.log(encrypted);
  }

  deletePasswordEntry() {
    this.deletpassword.emit(this.row);
  }

  decryptpassword(password) {
    // Decrypt String using CryptoJS AES 
    if (userpass === password) {
        //this.displaypassword = CryptoJS.AES.decrypt(this.row.secret, password).toString(CryptoJS.enc.Utf8);
        setInterval(() => { this.displaypassword = "" }, 15000);
    }
    console.log("entry");
  }
  /*displaypasswordlength() {
    if (this.displaypassword.length === 0) {
      return true;
    }
    else {
      return false;
    }
  }*/
}
