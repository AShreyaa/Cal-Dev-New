import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './components/core/core.component';
import { NavbarComponent } from '../navbar/components/navbar/navbar.component';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    NavbarComponent,
  ]
})
export class CoreModule { }
