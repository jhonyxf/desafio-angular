import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPersonagemComponent } from './detalhes-personagem.component';

describe('DetalhesPersonagemComponent', () => {
  let component: DetalhesPersonagemComponent;
  let fixture: ComponentFixture<DetalhesPersonagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesPersonagemComponent]
    });
    fixture = TestBed.createComponent(DetalhesPersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
