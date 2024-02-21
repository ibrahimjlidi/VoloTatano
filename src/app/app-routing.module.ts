import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/website/search/search.component';
import { BookiFlightComponent } from './pages/website/booki-flight/booki-flight.component';
import { MyBookingsComponent } from './pages/website/my-bookings/my-bookings.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { AllFlightsComponent } from './pages/admin/all-flights/all-flights.component';
import { CityComponent } from './pages/admin/city/city.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { LoginComponent } from './pages/admin/login/login.component';

const routes: Routes = [


  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component :SearchComponent,
    title:'Search Flight'
  } ,
  {
    path: 'book-flight',
    component :BookiFlightComponent,
    title:'Book New Flight'
  } ,
  {
    path: 'bookings',
    component :MyBookingsComponent,
    title:'My Bookings'
  } ,
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path: '',
    component :LayoutComponent,
    children:[

      {
        path:'airport',
        component:AirportComponent
      },
      {
        path:'city',
        component:CityComponent
      },
      {
        path:'all-bookings',
        component:BookingsComponent
      },
      {
        path:'new-flight',
        component:NewFlightComponent,
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
