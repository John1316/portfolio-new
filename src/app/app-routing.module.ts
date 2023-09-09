import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './content/pages/about-us/about-us.component';
import { ContactComponent } from './content/pages/contact/contact.component';
import { HomeComponent } from './content/pages/home/home.component';
import { PortfolioComponent } from './content/pages/portfolio/portfolio.component';
import { NotFoundComponent } from './content/shared/not-found/not-found.component';

const routes: Routes = [
  {path:'' , redirectTo:'home', pathMatch:'full'},
  {path: 'home' , component: HomeComponent },
  {path: 'about-us' , component: AboutUsComponent},
  {path: 'portfolio' , component: PortfolioComponent},
  {path: 'contact-us' , component:ContactComponent},
  {path: '**' , component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
