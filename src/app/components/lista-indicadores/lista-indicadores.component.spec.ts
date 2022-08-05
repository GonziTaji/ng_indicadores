import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIndicadoresComponent } from './lista-indicadores.component';

describe('ListaIndicadoresComponent', () => {
  let component: ListaIndicadoresComponent;
  let fixture: ComponentFixture<ListaIndicadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaIndicadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaIndicadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
