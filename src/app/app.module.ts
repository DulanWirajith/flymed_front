import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PodashbordComponent } from './podashbord/podashbord.component';
import { PoPickupOrdersComponent } from './po-pickup-orders/po-pickup-orders.component';
import { PoAcceptShipmentComponent } from './po-accept-shipment/po-accept-shipment.component';
import { PoInventryManagementComponent } from './po-inventry-management/po-inventry-management.component';
import { PoArrangeDeliveriesComponent } from './po-arrange-deliveries/po-arrange-deliveries.component';
import { PoDeliveryFeedbackComponent } from './po-delivery-feedback/po-delivery-feedback.component';

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'po-dashboard', component: PodashbordComponent },
  { path: 'po-pickup-orders', component: PoPickupOrdersComponent },
  { path: 'po-accept-shipment', component: PoAcceptShipmentComponent },
  { path: 'po-inventry', component: PoInventryManagementComponent },
  { path: 'po-arrange-deliveries', component: PoArrangeDeliveriesComponent },
  { path: 'po-delivery-feedback', component: PoDeliveryFeedbackComponent }
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    PodashbordComponent,
    PoPickupOrdersComponent,
    PoAcceptShipmentComponent,
    PoInventryManagementComponent,
    PoArrangeDeliveriesComponent,
    PoDeliveryFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
