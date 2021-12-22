import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ball } from 'src/app/models/ball';
import { VariablesService } from 'src/app/providers/variables.service';

import { BetSlipComponent } from './bet-slip.component';

describe('BetSlipComponent', () => {
  let component: BetSlipComponent;
  let fixture: ComponentFixture<BetSlipComponent>;
  let variableService: VariablesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetSlipComponent ],
      providers:[VariablesService],
      imports:[
        FormsModule,
        ReactiveFormsModule,    

      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetSlipComponent);
    component = fixture.componentInstance;
    variableService = TestBed.inject(VariablesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should count input on form', () => {
    component.ngOnInit();
    const formelement= fixture.nativeElement.querySelector('form');
    const inputElement =formelement.querySelectorAll('input');
    expect(inputElement.length).toEqual(1);
  });

  it('should count input on form', () => {
    component.ngOnInit();
    const formelement= fixture.nativeElement.querySelector('form');
    const inputElement =formelement.querySelectorAll('input');
    expect(inputElement.length).toEqual(1);
  });
  it('should check initial value of form', () => {
    component.ngOnInit();
    expect(component.slip?.value).toBeNull();
  });
  
  it('should check validator value of form', () => {
    component.ngOnInit();
    expect(component.slip?.invalid).toBeTrue();
  });

  it('should check validar required value of form', () => {
    component.ngOnInit();
    expect(component.slip?.errors?.['required']).toBeTrue();
  });

  it('should check validar required value of form', () => {
    component.ngOnInit();
    expect(component.slip?.errors?.['required']).toBeTrue();
  });

  it('should defined balls', () => {
    component.ngOnInit();
    variableService.siteSetting();
    const ball:Ball={
        number:1,
        color:'',
        selected:true
    }
    variableService.setselectedPosition(ball);
    expect(component.balls).toBeDefined();
  });
  
  it('should hidden send button', () => {
    component.ngOnInit();
    variableService.siteSetting();
    const ball:Ball={
        number:1,
        color:'',
        selected:true
    }
    variableService.setselectedPosition(ball);
    component.slip?.setValue(10);
    expect(component.send).toBeFalse();
  });

});
