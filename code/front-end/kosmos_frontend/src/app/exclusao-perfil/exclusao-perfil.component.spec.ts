import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusaoPerfilComponent } from './exclusao-perfil.component';

describe('ExclusaoPerfilComponent', () => {
  let component: ExclusaoPerfilComponent;
  let fixture: ComponentFixture<ExclusaoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExclusaoPerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExclusaoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
