import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private dataService: DataService) {
   }
  
  ngOnInit() {

  }

  reset(){
    this.dataService.reset();
  }

}
