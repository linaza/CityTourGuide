import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {
 selectedFile: File = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onFileSelected(event) {
    this.selectedFile  = event.target.files[0];
    console.log(event);
  }
  upload() {
    const fd =  new FormData();
    fd.append('uploads' , this.selectedFile , this.selectedFile.name);
    this.http.post('https://console.firebase.google.com/u/0/project/citytour-c368e/storage/citytour-c368e.appspot.com/files~2Fuploads', fd)
        .subscribe( res => {
      console.log(res);
    });
  }
}
