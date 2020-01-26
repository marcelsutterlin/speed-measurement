import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  valuehistory: Array<number>;
  constructor() { }

  addValue(speed) {
    this.valuehistory.push(speed);
  }

  getValues() {
    return this.valuehistory;
  }

  reset() {
    this.valuehistory = [];
    return this.valuehistory;
  }


}
