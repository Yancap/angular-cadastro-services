import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule } from '@angular/forms';
import { FormsService } from './components/forms/forms.component.service';
import { HistoricComponent } from './components/historic/historic.component';
import { HistoricService } from './components/historic/historic.service';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    HistoricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FormsService, HistoricService],
  bootstrap: [AppComponent]
})
export class AppModule { }
