import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajoRiesgoComponent } from './bajo-riesgo.component';

describe('BajoRiesgoComponent', () => {
  let component: BajoRiesgoComponent;
  let fixture: ComponentFixture<BajoRiesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajoRiesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajoRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
