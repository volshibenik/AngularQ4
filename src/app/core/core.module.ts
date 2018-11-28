import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, BreadcrumbsComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, BreadcrumbsComponent, FooterComponent]
})
export class CoreModule { }
