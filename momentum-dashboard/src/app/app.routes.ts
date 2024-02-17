import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"",pathMatch:'full',redirectTo:"/dashboard"},
    {path:'**',component:ErrorComponent}
];
