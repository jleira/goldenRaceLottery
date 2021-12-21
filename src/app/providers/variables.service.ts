import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Ball } from '../models/ball';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  colors=['#FF5733','#FFE333','#BBFF33','#33FFF3','#33D7FF','#3374FF','#7433FF','#F933FF','#AD1313','#76369F'];
  numbers=[1,2,3,4,5,6,7,8,9,10];
//  ballsList: Ball[]=[];
  ballsList: Subject<Ball[]> = new Subject();
  selecttecballsList= new ReplaySubject<any[]>(1);
  ballsSelected:any=[null,null,null,null,null,null,null,null];
  index=0;
  result: Subject<Ball> = new Subject();
  
  constructor() { 
    this.selecttecballsList.next(this.ballsSelected);
   
  }

  public siteSetting() {
      this.numbers.sort(()=> { return Math.random() - 0.5 });
      this.colors.sort(()=> { return Math.random() - 0.5 });
      const arrayb=this.numbers.map((number,index)=>{
        return {
          number: number,
          color: this.colors[index],
          selected: false
        }
      })
      this.ballsList.next(arrayb);
  }
  reset(){
    this.ballsSelected=[null,null,null,null,null,null,null,null];
    this.selecttecballsList.next(this.ballsSelected);
    this.index=0;
  }
  setselectedPosition(value:Ball){
    if(value.selected){
      this.ballsSelected[this.index]=value;
      this.index++;
    }else{
      const newvalue = this.ballsSelected.filter((ele:Ball)=>{
        return !ele || ele?.number != value.number;
      })
      this.ballsSelected = newvalue;
      for (let index = 0; index < 8 - newvalue.length; index++) {
        this.ballsSelected.push(null);
      }
      this.index--;
    }
    this.selecttecballsList.next(this.ballsSelected);
  }

  bet(){
    const value = Math.trunc(Math.random() * 10);
    const found= this.ballsSelected.find( (element:Ball) => element?.number == value )
    if(found === undefined){
      const resultfalse={
        number:0,
        color:'',
        selected:false
      }
      this.result.next(resultfalse);
    }else{
      this.result.next(found);      
    }

  }
}
