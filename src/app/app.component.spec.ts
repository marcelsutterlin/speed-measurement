import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { AddvalueComponent } from './addvalue/addvalue.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        HistoryComponent,
        AddvalueComponent
      ],
    }).compileComponents();
  }));

  it(`should have as title 'Geschwindigkeitsmessung'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Geschwindigkeitsmessung');
  });



});

/* tslint:disable:no-unused-variable */
// unit test for the data service

describe("DataService", () => {
  let service: DataService;

  beforeEach(() => {
    service = new DataService();
  });

  //test if a value is added to the array
  it("should put value in array", () => {
    service.addValue(100);
    expect(service.valuehistory.length).toEqual(1);
  });
  //test if multiple values can be added
  it("should put another value in array", () => {
    service.addValue(100);
    service.addValue(200);
    expect(service.valuehistory.length).toEqual(2);
  });

  //test correct max speed
  it("should calculate max speed", () => {
    service.addValue(100);
    service.addValue(200);
    service.updateStats();
    expect(service.fastestspeed).toEqual(200);
  });


  //test average speed calculation
  it("should calculate the correct average of 150", () => {
    service.addValue(100);
    service.addValue(200);
    service.updateStats();
    expect(service.average).toEqual(150);
  });


  //test correct phases calculation
  it("should have two phases over 100", () => {
    service.addValue(100);
    service.updateStats();
    service.addValue(200);
    service.updateStats();
    service.addValue(50);
    service.updateStats();
    service.addValue(200);
    service.updateStats();

    expect(service.phasesover100).toEqual(2);
  });


  //test the correct entries with multiple actions in between
  it("should have four entries in array", () => {
    service.addValue(100);
    service.updateStats();
    service.addValue(200);
    service.updateStats();
    service.addValue(50);
    service.updateStats();
    service.addValue(200);
    service.updateStats();

    expect(service.dtinsecs).toEqual(4);
  });


  // test the minutes over 100km/h
  it("calculate the minutes over 100 correctly", () => {
    service.addValue(150);
    service.updateStats();
    service.addValue(200);
    service.updateStats();
    service.addValue(50);
    service.updateStats();
    service.addValue(200);
    service.updateStats();

    expect(service.minover100).toEqual(0.05);
  });

});

