import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './components/notes/notes.component';
import {UserCalendar} from '../calendar/models/user-calendar'
import { HttpClient } from '@angular/common/http';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { LabelComponent } from '../label/components/label/label.component';


@NgModule({
  declarations: [NotesComponent, CreateNotesComponent],
  imports: [
    CommonModule,
    LabelComponent,
  ]
})

export class NotesModule {

  






 }
