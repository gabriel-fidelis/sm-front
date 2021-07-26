import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriaAgendaComponent } from './agenda/cria-agenda/cria-agenda.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
import { SmSidebarComponent } from './shared/sm-sidebar/sm-sidebar.component';
import { LoginComponent } from './usuario/login/login.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'usuario',
    children: [
      {path:'login', component:LoginComponent}
    ]
  },

  {
    path:'cria-agenda',
    component:CriaAgendaComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
