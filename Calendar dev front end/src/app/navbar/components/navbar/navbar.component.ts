import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsComponent } from '../settings/settings.component';
import { AccountCardComponent } from '../account-card/account-card.component';
import {ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class NavbarComponent implements OnInit {
 
  search:String
  account:boolean
  settings:boolean
   constructor(public dialogAcc: MatDialog,public dialogSet: MatDialog) {}
   openDialogSettings() {
     this.dialogAcc.closeAll()
    this.dialogAcc.open(SettingsComponent,{
      position: {
        top: '15px',
        right: '15px'
      },
      backdropClass: 'backdropBackground'
    });
  }

  openDialogAccounts() {
    this.dialogSet.closeAll()
  this.dialogSet.open(AccountCardComponent,{
      position: {
        top: '15px',
        right: '15px'
      },
      backdropClass: 'backdropBackground'
    });
  }


  ngOnInit(): void {
  }

}
