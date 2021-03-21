import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RegisterComponent } from './components/register/register.component';
import { LaunchComponent } from './components/launch/launch.component';
import { LoginComponent } from './components/login/login.component';
import { EditComponent } from './components/edit/edit.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { FunComponent } from './components/fun/fun.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { SavingComponent } from './components/saving/saving.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    ListComponent,
    CategoriesComponent,
    RegisterComponent,
    LaunchComponent,
    LoginComponent,
    EditComponent,
    InvestmentComponent,
    FunComponent,
    ExpensesComponent,
    SavingComponent    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
