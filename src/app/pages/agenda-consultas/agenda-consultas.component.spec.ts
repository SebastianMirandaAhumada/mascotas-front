import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaConsultasComponent } from './agenda-consultas.component';

describe('AgendaConsultasComponent', () => {
  let component: AgendaConsultasComponent;
  let fixture: ComponentFixture<AgendaConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendaConsultasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
