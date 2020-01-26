import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  valuehistory: Array<number> = [];
  dtinsecs: number = 0;
  fastestspeed: number = 0;
  average: number = 0;
  minover100: number = 0;
  phasesover100: number = 0;
  over100flag: boolean = false;

  constructor() { }

  addValue(speed: number) {
    //add a new value to the end of the array
    // another check if values are correct
    if (speed > 0 && speed < 300 && typeof speed  == "number"){
      this.valuehistory.push(speed);
    }
    
  }

  getValues() {
    // return the array with all values
    return this.valuehistory;
  }

  reset() {
    //reset all values to their default values
    this.valuehistory = [];
    this.dtinsecs = 0;
    this.fastestspeed = 0;
    this.average = 0;
    this.minover100 = 0;
    this.phasesover100 = 0;
    this.over100flag = false;
  }

  updateStats(){
    //update the number of seconds - which is the number of entries
    this.dtinsecs = this.valuehistory.length;

    //some temporary variables
    let maxval: number = this.valuehistory[0];
    let acc: number = 0;
    let secsover100: number = 0;

    // all calculations in one for loop to save iteration time
    for (let value of this.valuehistory) {
      //update the maximum speed
      if (value > maxval) {
        maxval = value;
      }
      //calculate the average (accumulating values)
      acc += value;

      //from above 101km/h
      if (value > 100){
        secsover100+=1;

      }
    }

      //from above 101km/h
      if (this.valuehistory[this.valuehistory.length-1] > 100 && this.over100flag == false){
        this.over100flag = true;
        this.phasesover100+=1;
      }
      else if (this.valuehistory[this.valuehistory.length-1] > 100 && this.over100flag == true){
        //within a phase
      }
      else {
        // phase is over or not occurring
        this.over100flag = false;
      }

    this.fastestspeed = maxval;
    //divide accumulated values by the array length to get average
    this.average = (acc/this.valuehistory.length);
    //divice secondsover100 by 60 to get minutes over 100
    this.minover100 = (secsover100/60);




    


  }


}
