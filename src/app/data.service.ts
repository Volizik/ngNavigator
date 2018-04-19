import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class DataService {
    constructor(private db: AngularFireDatabase) {}

    sendLocation(data) {
        this.db.list('/location').push(data);
        console.log(data);
    }
}
