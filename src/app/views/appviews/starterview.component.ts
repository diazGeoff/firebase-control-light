import { Router } from '@angular/router';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

interface Employee {
  name: string;
  position: string;
}

@Component({
  selector: 'starter',
  templateUrl: 'starter.template.html'
})
export class StarterViewComponent implements OnDestroy, OnInit {

  public nav: any;
  lightStatus: FirebaseObjectObservable<any>;
  employeeList: FirebaseListObservable<Employee[]>;
  lightStatusSubscription: Subscription;
  employeeListSubscription: Subscription;
  lightData: any = {
    red: 0,
    yellow: 0,
    green: 0
  };
  lightBulbUrl: string = "../../assets/images/bulb-icons/";

  public constructor(db: AngularFireDatabase, private _router: Router, private _ngZone: NgZone) {
    this.nav = document.querySelector('nav.navbar');
    this.lightStatus = db.object("lights");
    this.employeeList = db.list("employee");
  }

  public ngOnInit(): any {
    var self = this;
    this.nav.className += " white-bg";

    this.lightStatusSubscription = this.lightStatus.subscribe(snapshot => {
      this.lightData = snapshot;
    });

    this.employeeListSubscription = this.employeeList.subscribe((snapshot: Employee[]) => {
      console.log(snapshot);
    });
  }

  public changeLightStatus(): void {
    this.lightStatus.set(this.lightData);
  }

  get redLight(): string {
    return this.lightData.red ? `${this.lightBulbUrl}red_bulb.png`: `${this.lightBulbUrl}empty_bulb.png`;
  }

  get yellowLight(): string {
    return this.lightData.yellow ? `${this.lightBulbUrl}yellow_bulb.png`: `${this.lightBulbUrl}empty_bulb.png`;
  }

  get greenLight(): string {
    return this.lightData.green ? `${this.lightBulbUrl}green_bulb.png`: `${this.lightBulbUrl}empty_bulb.png`;
  }

  reset() {
    // Redo all initializations here for default values
    // or nulls - so that when new user logs in, he will
    // be given the proper data
  }

  public ngOnDestroy(): any {
    this.nav.classList.remove("white-bg");
    this.lightStatusSubscription.unsubscribe();
    this.employeeListSubscription.unsubscribe();
  }
}
