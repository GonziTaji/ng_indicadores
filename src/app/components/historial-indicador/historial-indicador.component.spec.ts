import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialIndicadorComponent } from './historial-indicador.component';

describe('HistorialIndicadorComponent', () => {
  let component: HistorialIndicadorComponent;
  let fixture: ComponentFixture<HistorialIndicadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialIndicadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
