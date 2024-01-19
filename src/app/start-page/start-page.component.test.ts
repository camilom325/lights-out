import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartPageComponent } from './start-page.component';
import { SharedServiceService } from './shared-service.service'; // Import the sharedService

describe('StartPageComponent', () => {
  let component: StartPageComponent;
  let fixture: ComponentFixture<StartPageComponent>;
  let service: SharedServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartPageComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set the selection on selection change', () => {
    const selection = 'example selection';
    component.selection = selection;
    component.onSelectionChange();
    expect(service.setSelection).toHaveBeenCalledWith(selection);
  });
  });