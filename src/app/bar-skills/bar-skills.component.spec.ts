import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSkillsComponent } from './bar-skills.component';

describe('BarSkillsComponent', () => {
  let component: BarSkillsComponent;
  let fixture: ComponentFixture<BarSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarSkillsComponent]
    });
    fixture = TestBed.createComponent(BarSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
