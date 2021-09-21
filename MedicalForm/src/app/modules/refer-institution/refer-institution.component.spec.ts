import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferInstitutionComponent } from './refer-institution.component';

describe('ReferInstitutionComponent', () => {
  let component: ReferInstitutionComponent;
  let fixture: ComponentFixture<ReferInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferInstitutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
