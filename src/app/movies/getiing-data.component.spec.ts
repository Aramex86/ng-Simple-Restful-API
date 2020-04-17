import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetiingDataComponent } from './getiing-data.component';

describe('GetiingDataComponent', () => {
  let component: GetiingDataComponent;
  let fixture: ComponentFixture<GetiingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetiingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetiingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
