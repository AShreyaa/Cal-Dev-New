import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { CoreComponent } from './core/components/core/core.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import { NavbarComponent } from './navbar/components/navbar/navbar.component';
import { AccountCardComponent } from './navbar/components/account-card/account-card.component';
import { SettingsComponent } from './navbar/components/settings/settings.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { MenuComponent } from './navbar/components/menu/menu.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NotesComponent } from './notes/components/notes/notes.component';
import { ToDoComponent } from './to-do/components/to-do/to-do.component';
import { CalendarComponent } from './calendar/components/calendar/calendar.component';
import { ReminderComponent } from './reminder/components/reminder/reminder.component';
import { TaskComponent } from './task/components/task/task.component';
import { EventComponent } from './event/components/event/event.component';
import { CreateNotesComponent } from './notes/components/create-notes/create-notes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { LabelComponent } from './label/components/label/label.component';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select'; 
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    NavbarComponent,
    AccountCardComponent,
    SettingsComponent,
    MenuComponent,
    CalendarComponent,
    NotesComponent,
    ToDoComponent,
    ReminderComponent,
    TaskComponent,
    EventComponent,
    CreateNotesComponent,
    LabelComponent,
    MenuComponent,
    NotesComponent,
   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    MatTabsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatChipsModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
