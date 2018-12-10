import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatIconModule,
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatCheckboxModule, MatIconModule],
  exports: [MatButtonModule, MatInputModule, MatCheckboxModule, MatIconModule],
})
export class MaterialModule {}
