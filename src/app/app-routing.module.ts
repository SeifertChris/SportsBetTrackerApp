import { AboutComponent } from './navigation/about/about.component';
import { EnterBetsComponent } from './enter-bets/enter-bets.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProfileComponent } from './profile/profile.component'
import { HowToComponent } from './navigation/how-to/how-to.component';
import { StatisticsComponent } from './navigation/statistics/statistics.component'

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'enterbets', component: EnterBetsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'howto', component: HowToComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
