import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SkillsComponent } from './skills/skills.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';


const routes: Routes = [

  {
    path:'home', component: HomeComponent
  },
  {
    path:'sobre', component: SobreComponent
  },
  {
    path:'skills', component: SkillsComponent
  },
  {
    path:'contato', component: ContatoComponent
  },
  {
    path:'NotFound', component: NotFoundComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch:'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
