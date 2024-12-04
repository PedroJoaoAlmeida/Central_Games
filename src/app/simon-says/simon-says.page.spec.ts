import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimonSaysPage } from './simon-says.page';

describe('SimonSaysPage', () => {
  let component: SimonSaysPage;
  let fixture: ComponentFixture<SimonSaysPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SimonSaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
