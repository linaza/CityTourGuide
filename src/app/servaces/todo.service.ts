import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import actions from '@angular/fire/schematics/deploy/actions';
import {map} from 'rxjs/operators';

export interface TodoService {
  task: string;
  priority: number;
  createdAt: number;
}
@Injectable({
  providedIn: 'root'
})
  export class TodoService {
  private todosCollection: AngularFirestoreCollection<TodoService>;
  private chatRequests: Observable<TodoService[] >;

  constructor(db: AngularFirestore) {
    this.todosCollection = db.collection<TodoService>('chatRequests');

  }
}

