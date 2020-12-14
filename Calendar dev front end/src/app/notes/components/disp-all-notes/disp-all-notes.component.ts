import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import {ACCOUNT}from '../../../../constant';
import { MatDialog } from '@angular/material/dialog';
import { EditNotesComponent } from '../edit-notes/edit-notes.component';
@Component({
  selector: 'app-disp-all-notes',
  templateUrl: './disp-all-notes.component.html',
  styleUrls: ['./disp-all-notes.component.css']
})
export class DispAllNotesComponent implements OnInit {

  constructor(private notesSer:NotesService,public dialog: MatDialog) { }
account=ACCOUNT
title="bugs"
  userNotes:any=[]

 async getAllUserNotes(){
   this.userNotes=await this.notesSer.getAllNotes(this.account,false).toPromise()
  //  this.notesSer.getAllNotes(this.account,false).subscribe(ele=>{
  //   console.log(ele)
  // })
 }


 openDialog(title:string,i:number): void {
  const dialogRef = this.dialog.open(EditNotesComponent, {
    
    // backdropClass:'backdropBackground',
    width: '650px',
    //  minHeight:'300px',
    position:{
      top:"10%"
    },
    //height:'600px',
    data: {title:title,account:this.account,notes:this.userNotes[i]}
  });
  
 }
  ngOnInit(): void {
    this.getAllUserNotes()

    
  }



}
