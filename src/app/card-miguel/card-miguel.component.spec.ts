import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMiguelComponent } from './card-miguel.component';

describe('CardMiguelComponent', () => {
  let component: CardMiguelComponent;
  let fixture: ComponentFixture<CardMiguelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMiguelComponent]
    });
    fixture = TestBed.createComponent(CardMiguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
