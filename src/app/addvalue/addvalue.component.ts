import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addvalue',
  templateUrl: './addvalue.component.html',
  styleUrls: ['./addvalue.component.css']
})
export class AddvalueComponent implements OnInit {
  public newvalue: number;
  
  constructor() { }

  ngOnInit() {
  }

}
