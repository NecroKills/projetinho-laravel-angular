import { NgModule } from '@angular/core';

import { Routes , RouterModule } from '@angular/router';
import { PaisListComponent } from 'src/app/pais-list/pais-list.component';
import { PaisFormComponent } from 'src/app/pais-form/pais-form.component';


const routes: Routes = [
  { path: 'pais', component: PaisListComponent},
  { path: 'pais/novo', component: PaisFormComponent},
  { path: 'pais/editar/:id', component: PaisFormComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
