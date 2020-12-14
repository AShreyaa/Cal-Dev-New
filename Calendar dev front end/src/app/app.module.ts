import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatGridListModule} from '@angular/material/grid-list'; 
import { CoreComponent } from './core/components/core/core.component';
import { NavbarComponent } from './navbar/components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MenuComponent } from './navbar/components/menu/menu.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { CreateNotesComponent } from './notes/components/create-notes/create-notes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { LabelsComponent } from './labels/components/labels/labels.component';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatChipsModule} from '@angular/material/chips'; 
import { NotesComponent } from './notes/components/notes/notes.component';
import { EditNotesComponent } from './notes/components/edit-notes/edit-notes.component';
import { DispAllNotesComponent } from './notes/components/disp-all-notes/disp-all-notes.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CreateListComponent } from './lists/components/create-list/create-list.component';
import { ListsComponent } from './lists/components/lists/lists.component';
import { EditListsComponent } from './lists/components/edit-lists/edit-lists.component';
import { DispAllListsComponent } from './lists/components/disp-all-lists/disp-all-lists.component';



@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    NavbarComponent,
    MenuComponent,
    CreateNotesComponent,
    LabelsComponent,
    NotesComponent,
    EditNotesComponent,
    DispAllNotesComponent,
    CreateListComponent,
    ListsComponent,
    EditListsComponent,
    DispAllListsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatExpansionModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
