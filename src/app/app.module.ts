import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MobileNavComponent } from './shared/mobile-nav/mobile-nav.component';
import { ContactComponent } from './shared/contact/contact.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { DesktopNavComponent } from './shared/desktop-nav/desktop-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './shared/success/success.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MobileNavComponent,
    ContactComponent,
    ComingSoonComponent,
    DesktopNavComponent,
    SuccessComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
