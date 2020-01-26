import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvalueComponent } from './addvalue.component';
import { FormsModule } from '@angular/forms';

describe('AddvalueComponent', () => {
  let component: AddvalueComponent;
  let fixture: ComponentFixture<AddvalueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ AddvalueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
