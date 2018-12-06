import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    LogoComponent,
    SearchComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    SearchComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
