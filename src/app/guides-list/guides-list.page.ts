import { Component, OnInit } from '@angular/core';
import { Contacts, Contact } from '@ionic-native/contacts';
import {CallNumber} from '@ionic-native/call-number/ngx';
import {SMS} from '@ionic-native/sms/ngx';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-guides-list',
  templateUrl: './guides-list.page.html',
  styleUrls: ['./guides-list.page.scss'],
})
export class GuidesListPage implements OnInit {
    results: any;
    number: any;
  myContacts: Contact[] = [];
  constructor(private contacts: Contact , private callNumber: CallNumber , private sms: SMS, private toastCtrl: ToastController) { }
  loadContacts() {
    const options = {
      filter: '',
      multiple: true,
      hasPhoneNumber: true
    };
    this.contacts.find(['*'], options).then((contacts: Contact []) => {
      this.myContacts = contacts;
      console.log('Contacts: ', contacts);
    });
  }
  sendSms(contact: Contact) {
    this.sms.send(contact.phoneNumbers[0].value, 'This is my message for you!');
  }
  call() {
    this.callNumber.callNumber('0525942249' , true);
  }
  ngOnInit() {
    fetch('./assets/input/guidesList.json').then(res => res.json()).then(json => {
      console.log('result::', json);
      this.results = json;
    });
  }

}
