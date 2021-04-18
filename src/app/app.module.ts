import { AuthenticationInfoService } from './services/authentication-info.service';
import { BetsLastWeekProfitsComponent } from './dashboard/bets-last-week-profits/bets-last-week-profits.component';
import { LastWeekProfitsService } from './services/last-week-profits.service';
import { LastWeekBetsService } from './services/last-week-bets.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { StatsCardComponent } from './dashboard/stats-card/stats-card.component';
import { EnterBetsComponent } from './enter-bets/enter-bets.component';
import { FormsModule } from '@angular/forms';
import { BetsLastWeekTableComponent } from './dashboard/bets-last-week-table/bets-last-week-table.component';
import { AboutComponent } from './navigation/about/about.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";
import { HowToComponent } from './navigation/how-to/how-to.component';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    DashboardComponent,
    ProfileComponent,
    StatsCardComponent,
    EnterBetsComponent,
    BetsLastWeekTableComponent,
    BetsLastWeekProfitsComponent,
    AboutComponent,
    HowToComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AmplifyUIAngularModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    LastWeekBetsService,
    LastWeekProfitsService,
    AuthenticationInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
