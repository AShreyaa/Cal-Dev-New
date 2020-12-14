import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserCalendar } from 'src/app/calendar/models/user-calendar';
import { LabelsComponent } from 'src/app/labels/components/labels/labels.component';

export interface DialogData {
  title: string;
  account: string;
  notes:UserCalendar;
}

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.css']
})
export class EditNotesComponent implements OnInit {

  // notes:any
  edit:boolean
  constructor(private notesSer:NotesService,@Inject(MAT_DIALOG_DATA) public data: DialogData,public dialog: MatDialog) { }

save(){
  this.edit=false
  console.log(this.data.notes)
  this.notesSer.saveNotes(this.data.notes).subscribe(res=>{
    console.log(res.status)
  })

  //this.dialog.closeAll();

}

  async ngOnInit(): Promise<void> {
   
// this.notes=await this.notesSer.getNotesByTitle(this.data.title,this.data.account).toPromise()
  }

  openDialogLabel(): void {
    const dialogRef = this.dialog.open(LabelsComponent, {
      
      // backdropClass:'backdropBackground',
      width: '300px',
      //  minHeight:'300px',
      position:{
        top:"10%"
      },
      //height:'600px',
      data: {labelsTagged:this.data.notes.tags}
    });
    
   }

}
