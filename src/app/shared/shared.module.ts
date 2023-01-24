import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultHeaderComponent } from './components/default-header/default-header.component';
import { DefaultFooterComponent } from './components/default-footer/default-footer.component';
import { GoBackTopComponent } from './components/go-back-top/go-back-top.component';



@NgModule({
  declarations: [
    DefaultHeaderComponent,
    DefaultFooterComponent,
    GoBackTopComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefaultHeaderComponent,
    DefaultFooterComponent,
    GoBackTopComponent
  ]
})
export class SharedModule { }
