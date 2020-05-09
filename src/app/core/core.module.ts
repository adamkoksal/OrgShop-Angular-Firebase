import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [BsNavbarComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "login", component: LoginComponent }]),
  ],
  exports: [BsNavbarComponent],
})
export class CoreModule {}
