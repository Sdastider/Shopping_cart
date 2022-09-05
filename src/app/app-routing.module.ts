import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
   {path:'login', component:LoginComponent },
   {path:'signup', component:SignupComponent},
   {path:'forgotpassword',component:ForgotpasswordComponent},
   {path:'',redirectTo:'/login', pathMatch:'full'},
   {
    path:'admin',
    canActivate : [AuthGuard],
    loadChildren: () =>
        import('./modules/admin/admin.module').then((mod) => mod.AdminModule),
  },  
   {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
