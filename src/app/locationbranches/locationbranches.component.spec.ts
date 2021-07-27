import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationbranchesComponent } from './locationbranches.component';

describe('LocationbranchesComponent', () => {
  let component: LocationbranchesComponent;
  let fixture: ComponentFixture<LocationbranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationbranchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationbranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
