import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddUsuarioComponent} from '../app/components/add-usuario/add-usuario.component';
import { PrincipalComponent } from '../app/components/principal/principal.component';
const routes: Routes = [
  {path: 'addUsuario', component: AddUsuarioComponent },
  {path: '', component: PrincipalComponent },
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
