import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddUsuarioComponent} from '../app/components/add-usuario/add-usuario.component';
import { PrincipalComponent } from '../app/components/principal/principal.component';
import { ContactComponent } from '../app/components/contact/contact.component';
import { LoginComponent } from '../app/components/login/login.component';

const routes: Routes = [
  {path: 'addUsuario', component: AddUsuarioComponent },
  {path: '', component: PrincipalComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'login', component: LoginComponent },
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
