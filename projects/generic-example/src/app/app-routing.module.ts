// angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListExampleComponent } from './components/list-example/list-example.component';
import { InputExampleComponent } from './components/input-example/input-example.component';
import { ModalExampleComponent } from './components/modal-example/modal-example.component';

const routes: Routes = [
  // // Vendors
  { path: 'examples/list', component: ListExampleComponent },
  { path: 'examples/input', component: InputExampleComponent },
  { path: 'examples/modal', component: ModalExampleComponent },

  // default
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
