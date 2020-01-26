import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-addvalue',
  templateUrl: './addvalue.component.html',
  styleUrls: ['./addvalue.component.css']
})
export class AddvalueComponent implements OnInit {
  public newvalue;


  public addValue(){
    // add a value if its between 0 and 299 and a number
    // if not, throw an alert.
    if (this.newvalue > 0 && this.newvalue < 300 && typeof this.newvalue  == "number"){
      this.dataService.addValue(this.newvalue);
      this.dataService.updateStats();
    }
    else if (this.newvalue < 0) {
      alert("Geschwindigkeit ist unter null.");
    }
    else if (this.newvalue > 0) {
      alert("Geschwindigkeit ist über 299 km/h.");
    }
    else if (this.newvalue != "undefined"){
      alert("Wert ist leer.");
    }
    else if (typeof this.newvalue != "number"){
      alert("Typ der Eingabe ist keine Nummer.");
    }
    else {
      alert("Eingabe ist ungültig.");
    }

  }
  // inject the data service
  constructor(private dataService: DataService) {
   }

  ngOnInit() {
  }

}
