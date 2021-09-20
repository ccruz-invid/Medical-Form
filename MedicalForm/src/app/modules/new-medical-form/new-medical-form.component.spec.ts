import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMedicalFormComponent } from './new-medical-form.component';

describe('NewMedicalFormComponent', () => {
  let component: NewMedicalFormComponent;
  let fixture: ComponentFixture<NewMedicalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMedicalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMedicalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
