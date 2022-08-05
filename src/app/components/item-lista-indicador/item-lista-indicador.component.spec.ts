import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListaIndicadorComponent } from './item-lista-indicador.component';

describe('ItemListaIndicadorComponent', () => {
  let component: ItemListaIndicadorComponent;
  let fixture: ComponentFixture<ItemListaIndicadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListaIndicadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemListaIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
