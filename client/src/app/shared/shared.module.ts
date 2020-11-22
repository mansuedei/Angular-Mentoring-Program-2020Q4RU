// Import base modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './components/header/logo/logo.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent, LogoComponent],
  exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
