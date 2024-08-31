import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMissionBarComponent } from './side-mission-bar.component';

describe('SideMissionBarComponent', () => {
  let component: SideMissionBarComponent;
  let fixture: ComponentFixture<SideMissionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMissionBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideMissionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
