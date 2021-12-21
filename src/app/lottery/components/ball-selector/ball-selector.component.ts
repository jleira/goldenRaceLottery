import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ball } from 'src/app/models/ball';
import { VariablesService } from 'src/app/providers/variables.service';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss']
})
export class BallSelectorComponent implements OnInit {
  balls:any=[];
  results:any;
//  prueba$!: Observable<any>;
  constructor(
    public variables:VariablesService
  ) {

   }

  ngOnInit(): void {
    this.variables.ballsList.subscribe((valor_array)=>{
      this.balls=valor_array;
      this.results=null;
    });
    this.variables.result.subscribe((result)=>{
      this.results=result;
      
    })
    this.variables.siteSetting();
   
  }
  selectitem(index:number){
    if(this.variables.index<8){
      this.balls[index].selected=!this.balls[index].selected;
      this.variables.setselectedPosition(this.balls[index]);        
    }else if(this.balls[index].selected){
      this.balls[index].selected=!this.balls[index].selected;
      this.variables.setselectedPosition(this.balls[index]);        
    }
  }
  clearSelector(){

    this.balls=this.balls.map((elemen:Ball)=>{
      return {
        number: elemen.number,
        color: elemen.color,
        selected: true
      }
    })
    this.variables.reset();
  }
}
