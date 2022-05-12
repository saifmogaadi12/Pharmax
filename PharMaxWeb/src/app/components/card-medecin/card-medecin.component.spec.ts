import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMedecinComponent } from './card-medecin.component';

describe('CardMedecinComponent', () => {
  let component: CardMedecinComponent;
  let fixture: ComponentFixture<CardMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
