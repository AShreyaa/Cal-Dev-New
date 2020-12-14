import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { observeOn } from 'rxjs/operators';
import { UserCalendar } from 'src/app/calendar/models/user-calendar';
import { LabelsComponent } from 'src/app/labels/components/labels/labels.component';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css']
})
export class CreateNotesComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private notesSer:NotesService,public dialog: MatDialog) { }
  selectedLabels:any=[]
newNotes=this.formBuilder.group({
  title:this.formBuilder.group({
    title:[''],
    type:['notes'],
    account:['shr'],
  }),
  description:[''],
  notes:[''],
  date:[''],
  editedTimestamp:this.formBuilder.array([
    this.formBuilder.control('')
  ]),
  targetDate:[''],
  targetTime:[''],
  tags:this.formBuilder.array([
    //this.formBuilder.control('')
  ]),
  attachmentUrl:this.formBuilder.array([
    //this.formBuilder.control('')
  ]),
  archive:['false'],
  taskOrList:this.formBuilder.array([
    //this.formBuilder.control('')
  ])
  })

  // private labeldeletedBehaviorSub = new BehaviorSubject('');
  // labelDeleted = this.labeldeletedBehaviorSub.asObservable();

  labelDisp:boolean;
  attachmentDisp:boolean;
  colorDisp:boolean;
  openExpPanel=false;

  expOpened(){
    this.openExpPanel=true
  }

  onSubmit(){
    if(!(this.newNotes.value.title.title && this.newNotes.value.description)){
      alert("please enter title n des")
      return
    }
    if(this.newNotes.value.description.split(' ').length>21){
      alert("des should not be more than 25 words")
      return
    }
    console.log("submit")
    this.addTags(this.selectedLabels)
    // let userCal={} as UserCalendar
    // userCal=Object.assign(userCal,this.newNotes.value)
    // console.log(this.newNotes)
this.notesSer.saveNotes(this.newNotes.value).subscribe(res=>{
 console.log(res.status)
})
this.resetNewNotes()
console.log("reset done"+this.newNotes.value)
this.selectedLabels=[]
this.show(4)
console.log(this.openExpPanel)
this.openExpPanel=false
console.log(this.openExpPanel)

  }
  get tags() {
    return this.newNotes.get('tags') as FormArray;
  }

  addTags(selectedLabels:any[]) {
    selectedLabels.forEach(element => {
      this.tags.push(this.formBuilder.control(element));
      
    });
    
  }

  resetNewNotes(){
    this.newNotes.reset({title:{type:"notes",account:"shr"},archive:"false"})
  }

closeNewNotes(){
  this.resetNewNotes()
  this.openExpPanel=false
}

// labelsEdited(tags:any){
 
//   this.selectedLabels=tags
//   console.log("event catched",this.selectedLabels)

// }

removeLabel(option:string){
  console.log(option)
let i=this.selectedLabels.indexOf(option)
console.log(i)
this.selectedLabels.splice(i,1)
// this.labeldeletedBehaviorSub.next(option)




}
show(i:number){
  console.log(i)
switch(i){
  case 1:
  this.colorDisp=!this.colorDisp;
  this.attachmentDisp=false;
  this.labelDisp=false;
    break;
  case 2:
  this.colorDisp=false;
  this.attachmentDisp=!this.attachmentDisp;
  this.labelDisp=false;
    break;
  case 3:this.colorDisp=false;
  this.attachmentDisp=false;
  this.labelDisp=!this.labelDisp;
    break;
  default:this.colorDisp=false;
  this.attachmentDisp=false;
  this.labelDisp=false;

}
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
    data: {labelsTagged:this.selectedLabels}
  });
  
 }

  ngOnInit(): void {
   
  }

}
