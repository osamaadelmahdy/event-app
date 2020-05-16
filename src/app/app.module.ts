import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';

const components = [
  AppComponent,
  RegisterComponent,
  LoginComponent,
  EventsComponent,
  SpecialEventsComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, components],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
