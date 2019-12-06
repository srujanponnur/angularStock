import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { StockDetailComponent } from './stocks/stock-detail/stock-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SummaryComponent } from './summary/summary.component';
import { SellCartComponent } from './sell-cart/sell-cart.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent} from './user-profile/user-profile.component';

const appRoutes : Routes =[
{path:'', redirectTo:'/login',pathMatch:'full'},
{path:'login', component : LoginComponent},
{path:'registration', component : RegistrationComponent},
{ path :'stocks' , component: StocksComponent,children :[
{path:':id',component:StockDetailComponent}
] },
{path : 'cart', component:ShoppingCartComponent},
{path : 'summary', component:SummaryComponent},
{path : 'sellcart', component:SellCartComponent},
{path :'not-found', component:PagenotfoundComponent},
{path : 'user-detail', component : UserProfileComponent},
{path : 'logout', component : LoginComponent},
{path : '**' , redirectTo:'/not-found'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]

})

export class AppRoutingModule{

}
