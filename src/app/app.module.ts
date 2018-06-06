import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GeralService } from './geral.service';
import { appRoute } from './route';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    AdicionarComponent,
    HomeComponent,
    PortfolioComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [GeralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
