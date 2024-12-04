import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JogoMemoriaPage } from './jogo-memoria.page';

describe('JogoMemoriaPage', () => {
  let component: JogoMemoriaPage;
  let fixture: ComponentFixture<JogoMemoriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoMemoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
