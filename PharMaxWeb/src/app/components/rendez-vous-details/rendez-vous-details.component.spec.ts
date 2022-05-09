import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousDetailsComponent } from './rendez-vous-details.component';

describe('RendezVousDetailsComponent', () => {
  let component: RendezVousDetailsComponent;
  let fixture: ComponentFixture<RendezVousDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendezVousDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezVousDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
