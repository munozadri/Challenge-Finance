import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const appRoutes: Routes = [
    {path: '', component: LaunchComponent},
    {path:'home', component: HomeComponent},
    {path: 'formulario', component: FormComponent},
    {path: 'editar/:id', component: EditComponent},
    {path: 'listado', component: ListComponent},
    {path: 'categorias', component: CategoriesComponent},
    {path: 'inversion', component: InvestmentComponent},
    {path: 'recreacion', component: FunComponent},
    {path: 'ahorro', component: SavingComponent},
    {path: 'gastosoperativos', component: ExpensesComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegisterComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);