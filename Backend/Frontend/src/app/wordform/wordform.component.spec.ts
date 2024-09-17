import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordformComponent } from './wordform.component';

describe('WordformComponent', () => {
  let component: WordformComponent;
  let fixture: ComponentFixture<WordformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
