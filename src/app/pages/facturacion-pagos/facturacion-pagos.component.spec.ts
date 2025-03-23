import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionPagosComponent } from './facturacion-pagos.component';

describe('FacturacionPagosComponent', () => {
  let component: FacturacionPagosComponent;
  let fixture: ComponentFixture<FacturacionPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacturacionPagosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturacionPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
