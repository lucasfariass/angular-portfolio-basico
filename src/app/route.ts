import { AdicionarComponent } from './adicionar/adicionar.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Routes } from '@angular/router';

export const appRoute: Routes = [

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'adicionar', component: AdicionarComponent}

];
