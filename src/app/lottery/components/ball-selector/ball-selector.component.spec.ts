import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VariablesService } from 'src/app/providers/variables.service';

import { BallSelectorComponent } from './ball-selector.component';

describe('BallSelectorComponent', () => {
  let component: BallSelectorComponent;
  let fixture: ComponentFixture<BallSelectorComponent>;
  let variableService: VariablesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallSelectorComponent ],
      providers:[VariablesService]    
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallSelectorComponent);
    component = fixture.componentInstance;
    variableService = TestBed.inject(VariablesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should defined balls', () => {
    component.ngOnInit();
    expect(component.balls).toBeDefined();
  });
  it('should defined results', () => {
    component.ngOnInit();
    component.selectitem(1);
    variableService.bet();
    expect(component.results).toBeDefined();
  });
  it('should clear selected', () => {
    component.ngOnInit();
    component.selectitem(1);
    component.clearSelector();
    expect(component.balls).toBeDefined();
  });
});
