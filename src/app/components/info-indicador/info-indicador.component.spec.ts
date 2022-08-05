import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoIndicadorComponent } from './info-indicador.component';

describe('InfoIndicadorComponent', () => {
  let component: InfoIndicadorComponent;
  let fixture: ComponentFixture<InfoIndicadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoIndicadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
