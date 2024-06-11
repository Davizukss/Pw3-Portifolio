import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDaviComponent } from './card-davi.component';

describe('CardDaviComponent', () => {
  let component: CardDaviComponent;
  let fixture: ComponentFixture<CardDaviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDaviComponent]
    });
    fixture = TestBed.createComponent(CardDaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
