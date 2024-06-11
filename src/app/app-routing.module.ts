import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDaviComponent } from './card-davi/card-davi.component';
import { CardMiguelComponent } from './card-miguel/card-miguel.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [

  {
    path:'home', component: HomeComponent
  },
  {
    path:'Davi', component: CardDaviComponent
  },
  {
    path:'Miguel', component: CardMiguelComponent
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
