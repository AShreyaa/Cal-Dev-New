import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './components/notes/notes.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { EditNotesComponent } from './components/edit-notes/edit-notes.component';
import { DispAllNotesComponent } from './components/disp-all-notes/disp-all-notes.component';



@NgModule({
  declarations: [NotesComponent, CreateNotesComponent, EditNotesComponent, DispAllNotesComponent],
  imports: [
    CommonModule
  ]
})
export class NotesModule { }
