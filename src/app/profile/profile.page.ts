import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { UserTrackingService} from '@angular/fire/analytics';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
// @ts-ignore
import auth from 'firebase';
import {error} from 'util';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';


class ApiService {
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
