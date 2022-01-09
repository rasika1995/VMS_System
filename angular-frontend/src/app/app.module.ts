import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriberComponent } from './component/subscriber/subscriber.component';
import { SubscriberService } from './services/subscriber-service/subscriber.service';

@NgModule({
  declarations: [
    AppComponent,
    SubscriberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SubscriberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
