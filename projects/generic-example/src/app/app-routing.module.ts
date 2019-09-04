// angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListExampleComponent } from './components/list-example/list-example.component';

const routes: Routes = [
  // // Vendors
  { path: 'examples/list', component: ListExampleComponent },

  // default
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
