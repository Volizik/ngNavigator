import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    position = {};

    constructor(private db: DataService) {
    }

    ngOnInit() {
        navigator.geolocation.getCurrentPosition(pos => {
           this.position = {
               lng: pos.coords.longitude,
               lat: pos.coords.latitude,
           };
           console.log(this.position);
        }, err => {
            console.log(err);
        });

        this.getPosition();
    }

    getPosition() {
        setInterval(() => {this.db.sendLocation(this.position); }, 10000);
        console.log(this.position);
    }
}
