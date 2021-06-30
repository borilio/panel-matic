import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaAtrasComponent } from './cuenta-atras.component';

describe('CuentaAtrasComponent', () => {
  let component: CuentaAtrasComponent;
  let fixture: ComponentFixture<CuentaAtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaAtrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaAtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
