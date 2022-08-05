import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoIndicadorComponent } from './grafico-indicador.component';

describe('GraficoIndicadorComponent', () => {
  let component: GraficoIndicadorComponent;
  let fixture: ComponentFixture<GraficoIndicadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoIndicadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
