import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WinComponent } from './win-page.component';

describe('WinComponent', () => {
  let component: WinComponent;
  let fixture: ComponentFixture<WinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WinComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add confetti after 700ms', () => {
    spyOn(component.confetti, 'addConfetti');
    component.onHoverConfetti();
    setTimeout(() => {
      expect(component.confetti.addConfetti).toHaveBeenCalled();
    }, 700);
  });
    
});