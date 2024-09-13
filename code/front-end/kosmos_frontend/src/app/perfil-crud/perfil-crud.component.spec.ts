import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCrudComponent } from './perfil-crud.component';

describe('PerfilCrudComponent', () => {
  let component: PerfilCrudComponent;
  let fixture: ComponentFixture<PerfilCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
