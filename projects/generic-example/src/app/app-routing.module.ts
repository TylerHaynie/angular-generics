// angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputExampleComponent } from './components/input-example/input-example.component';
import { ModalExampleComponent } from './components/modal-example/modal-example.component';
import { AlertExampleComponent } from './components/alert-example/alert-example.component';
import { TableExampleComponent } from './components/table-example/table-example.component';

const routes: Routes = [
  // // Vendors
  { path: 'examples/input', component: InputExampleComponent },
  { path: 'examples/modal', component: ModalExampleComponent },
  { path: 'examples/alert', component: AlertExampleComponent },
  { path: 'examples/table', component: TableExampleComponent },

  // default
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
