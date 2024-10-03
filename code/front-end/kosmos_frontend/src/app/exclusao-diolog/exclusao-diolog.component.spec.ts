import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusaoDiologComponent } from './exclusao-diolog.component';

describe('ExclusaoDiologComponent', () => {
  let component: ExclusaoDiologComponent;
  let fixture: ComponentFixture<ExclusaoDiologComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExclusaoDiologComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExclusaoDiologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
