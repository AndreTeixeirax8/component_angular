import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { CardButtonCancelComponent } from './card-button-cancel/card-button-cancel.component';

@NgModule({
  declarations: [AppComponent, CardButtonCancelComponent],
  imports: [BrowserModule, CardsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
