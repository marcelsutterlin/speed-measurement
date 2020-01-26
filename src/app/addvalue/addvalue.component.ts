import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-addvalue',
  templateUrl: './addvalue.component.html',
  styleUrls: ['./addvalue.component.css']
})
export class AddvalueComponent implements OnInit {
  public newvalue: number;


  public addValue(){
    this.dataService.addValue(this.newvalue);
  }
  constructor(  private dataService: DataService) {
   }

  ngOnInit() {
  }

}
