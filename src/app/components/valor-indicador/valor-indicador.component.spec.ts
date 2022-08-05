import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorIndicadorComponent } from './valor-indicador.component';

describe('ValorIndicadorComponent', () => {
  let component: ValorIndicadorComponent;
  let fixture: ComponentFixture<ValorIndicadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorIndicadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
