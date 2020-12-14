import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountCardComponent } from './components/account-card/account-card.component';
import { MenuComponent } from './components/menu/menu.component';
import { SettingsComponent } from './components/settings/settings.component';



@NgModule({
  declarations: [NavbarComponent, AccountCardComponent, MenuComponent, SettingsComponent],
  imports: [
    CommonModule
  ]
})
export class NavbarModule { }
