import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { GenericContentModule } from '../containers/content/content.module';

@NgModule({
  declarations: [
    SideNavComponent,
    TopNavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    GenericContentModule
  ],
  exports: [
    SideNavComponent,
    TopNavComponent
  ]
})

export class GenericNavigationModule { }
