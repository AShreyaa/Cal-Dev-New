import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNotesComponent } from './notes/components/create-notes/create-notes.component';

const routes: Routes = [
  {path:'hi',component:CreateNotesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
