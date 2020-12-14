import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './components/lists/lists.component';
import { CreateListComponent } from './components/create-list/create-list.component';
import { DispAllListsComponent } from './components/disp-all-lists/disp-all-lists.component';
import { EditListsComponent } from './components/edit-lists/edit-lists.component';



@NgModule({
  declarations: [ListsComponent, CreateListComponent, DispAllListsComponent, EditListsComponent],
  imports: [
    CommonModule
  ]
})
export class ListsModule { }
