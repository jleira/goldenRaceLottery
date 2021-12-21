import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LotteryModule } from './lottery/lottery.module';
import { VariablesService } from './providers/variables.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LotteryModule
  ],
  providers: [VariablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
