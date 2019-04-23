import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentPage } from './medicament.page';

describe('medicamentPage', () => {
  let component: MedicamentPage;
  let fixture: ComponentFixture<MedicamentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MedicamentPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
