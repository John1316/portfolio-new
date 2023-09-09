import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './content/pages/home/home.component';
import { AboutUsComponent } from './content/pages/about-us/about-us.component';
import { NavbarComponent } from './content/shared/navbar/navbar.component';
import { FooterComponent } from './content/shared/footer/footer.component';
import { PortfolioComponent } from './content/pages/portfolio/portfolio.component';
import { NotFoundComponent } from './content/shared/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ContactComponent } from './content/pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopoverModule } from "ngx-bootstrap/popover";
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    NavbarComponent,
    FooterComponent,
    PortfolioComponent,
    NotFoundComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxTypedJsModule,
    BrowserAnimationsModule,
    PopoverModule,
    NgxIntlTelInputModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
