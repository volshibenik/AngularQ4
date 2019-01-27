import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, MatInputModule, MatButtonModule],
  exports: [LoginComponent],
})
export class UsersModule {}
