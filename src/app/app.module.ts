import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AsideComponent } from './layouts/aside/aside.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PlayerComponent } from './layouts/player/player.component';


@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HeaderComponent,
    FooterComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
