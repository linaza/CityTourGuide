import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { UserTrackingService} from '@angular/fire/analytics';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userPosts
  constructor(private afs: AngularFirestore, private user: UserTrackingService) {
    const posts = afs.doc('users/${user.getUID()}');
    this.userPosts = posts.valueChanges();
  }

  ngOnInit() {
  }

}
