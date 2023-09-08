import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisponibilidadPage } from './disponibilidad.page';

describe('DisponibilidadPage', () => {
  let component: DisponibilidadPage;
  let fixture: ComponentFixture<DisponibilidadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DisponibilidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
