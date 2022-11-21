import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsComponent } from './main/brands/brands.component';
import { CategoriesComponent } from './main/categories/categories.component';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';
import { HowtouseComponent } from './main/howtouse/howtouse.component';
import { WhoareyouComponent } from './main/whoareyou/whoareyou.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';


const routes: Routes = [
  {path : "home" , component : HomeComponent},
  {path : "" , component : HomeComponent},
  {path : "brand" , component : BrandsComponent},
  {path : "categories" , component : CategoriesComponent},
  {path : "contact" , component : ContactComponent},
  {path : "whoareyou" , component : WhoareyouComponent},
  {path : "howtouse", component : HowtouseComponent},
  {path : "notfound" , component : NotfoundComponent},
  {path : "**" , component : NotfoundComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
