import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JogoVelhaPage } from './jogo-velha.page';

describe('JogoVelhaPage', () => {
  let component: JogoVelhaPage;
  let fixture: ComponentFixture<JogoVelhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoVelhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
