import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountsComponent } from '../accounts/accounts.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor(public dailogSettings:MatDialog,public dailogAccount:MatDialog) { }

  valueDate=new Date();

  openSettings(){
  this.dailogSettings.closeAll()
  this.dailogSettings.open(SettingsComponent,{
    position:{
      top:'15px',
      right:'15px'

    },
    backdropClass:'backdropBackground'
  })
  }

  openAccounts(){
    this.dailogAccount.closeAll()
    this.dailogAccount.open(AccountsComponent,{
      position:{
        top:'15px',
        right:'15px'
  
      },
      backdropClass:'backdropBackground'
    })
    }

  ngOnInit(): void {
  }

}
