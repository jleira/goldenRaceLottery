import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VariablesService } from 'src/app/providers/variables.service';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent implements OnInit {
  slipForm!: FormGroup;
  balls:any=[];
  send=false;
  nbet=false;
    constructor(
      public variables:VariablesService,
      private fb: FormBuilder
    ) {
  
     }
  
    ngOnInit(): void {
      this.slipForm = this.fb.group({
        slip:new FormControl(null,[Validators.required,Validators.min(5)]),
      });
      this.slip?.valueChanges.subscribe((valor)=>{
        this.send=false;
      })
      this.slipForm.markAllAsTouched();
    
      this.variables.selecttecballsList.subscribe((valor_array)=>{
        this.balls=valor_array;
      });     
    }
    get slip() { return this.slipForm.get('slip'); }

    apuesta(){
      this.send=true;
    }
    bet(){
      if(this.nbet){
        this.variables.siteSetting();
        this.variables.reset();
        this.slipForm.reset();
        this.nbet=false;
      }else{
        this.variables.bet();
        this.nbet=true;
      }
    }
}
