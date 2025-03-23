import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabExternosComponent } from './lab-externos.component';

describe('LabExternosComponent', () => {
  let component: LabExternosComponent;
  let fixture: ComponentFixture<LabExternosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabExternosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabExternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
