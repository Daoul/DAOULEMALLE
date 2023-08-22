import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoreComponent } from './profesore.component';

describe('ProfesoreComponent', () => {
  let component: ProfesoreComponent;
  let fixture: ComponentFixture<ProfesoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesoreComponent]
    });
    fixture = TestBed.createComponent(ProfesoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
