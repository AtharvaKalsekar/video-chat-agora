import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc';

const agoraConfig: AgoraConfig = {
  AppID: '585f184d94914fc098103e0daa4ae323',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularAgoraRtcModule.forRoot(agoraConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
