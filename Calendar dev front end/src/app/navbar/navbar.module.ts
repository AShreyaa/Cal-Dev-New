import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { MenuComponent } from './components/menu/menu.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [NavbarComponent, AccountsComponent, MenuComponent, SettingsComponent, SearchComponent],
  imports: [
    CommonModule
  ]
})
export class NavbarModule { }
