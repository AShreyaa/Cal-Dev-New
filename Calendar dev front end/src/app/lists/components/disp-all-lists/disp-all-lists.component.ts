import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListsService } from '../../service/lists.service';
import { EditListsComponent } from '../edit-lists/edit-lists.component';

@Component({
  selector: 'app-disp-all-lists',
  templateUrl: './disp-all-lists.component.html',
  styleUrls: ['./disp-all-lists.component.css']
})
export class DispAllListsComponent implements OnInit {

  constructor(private listSer:ListsService,public dailog:MatDialog) { }
userLists:any=[]


async fetchAllList(){
 this.userLists=await this.listSer.getAllLists(false).toPromise();
 console.log(this.userLists)
}

openDialog(i:number){
this.dailog.open(EditListsComponent)
}

  ngOnInit(): void {
    this.fetchAllList()
  }

}
