import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { GenericElementModule } from '../element/generic-element.module';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    SideNavComponent,
    TopNavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    GenericElementModule
  ],
  exports: [
    SideNavComponent,
    TopNavComponent
  ]
})

export class GenericNavigationModule { }
