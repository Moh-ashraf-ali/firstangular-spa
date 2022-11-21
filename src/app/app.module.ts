import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { WhoareyouComponent } from './main/whoareyou/whoareyou.component';
import { CategoriesComponent } from './main/categories/categories.component';
import { BrandsComponent } from './main/brands/brands.component';
import { ContactComponent } from './main/contact/contact.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { HowtouseComponent } from './main/howtouse/howtouse.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    WhoareyouComponent,
    CategoriesComponent,
    BrandsComponent,
    ContactComponent,
    NotfoundComponent,
    HowtouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
