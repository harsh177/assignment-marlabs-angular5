import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { ConnectionModule } from './connection/connection.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarLeftComponent,
    TestComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConnectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
