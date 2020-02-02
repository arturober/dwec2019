import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ContactsResult } from '@arturober/capacitor-contacts';
const { ContactsPlugin } = Plugins;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss']
})
export class ContactsPage implements OnInit {
  result: ContactsResult;

  constructor() {}

  async ngOnInit() {
    this.result = await ContactsPlugin.getContacts() as ContactsResult;
  }
}
