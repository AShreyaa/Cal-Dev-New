import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { UserCalendar } from 'src/app/calendar/models/user-calendar';
import { NotesService } from '../../service/notes.service';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { LabelComponent } from 'src/app/label/components/label/label.component';
import { LabelService } from 'src/app/label/services/label.service';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css'],
})
export class CreateNotesComponent implements OnInit {

  deletedLabel :string

  allSelectedLabels:any=[];

  private labels = new BehaviorSubject('');
labelsSelected = this.labels.asObservable();
  us: UserCalendar={
    title:{
      title:"",
      type:"",
      account:"",
  },
  description:"",
  date:"add",
  editedTimestamp:[],
  targetDate:"",
  targetTime:"",
  tags:[],
  attachmentUrl:[],
  archive:true,
  taskOrList:[]

  }


  constructor(private ser:NotesService,private formBuilder:FormBuilder) { 
    
  }
  
addLabel:boolean
addColor:boolean
addAttachment:boolean

newNotes= this.formBuilder.group({
  title:this.formBuilder.group({
    title:[''],
    type:['notes'],
    account:['Shr'],
  }),
description:[''],
date:[''],
editedTimestamps: this.formBuilder.array([
  this.formBuilder.control('')
]),
targetDate:[''],
targetTime:[''],
tags:this.formBuilder.array([
  this.formBuilder.control('')
]),
attachmentUrl:this.formBuilder.array([
  this.formBuilder.control('')
]),
archive:['false'],
taskOrList:this.formBuilder.array([
  this.formBuilder.control('')
]),
});

changeLabels() {
  this.labels.next(this.allSelectedLabels.toString())
}

get tags() {
  return this.newNotes.get('tags') as FormArray;
}
addTags(){
  this.tags.push(this.formBuilder.control(''))
}
 
extensions(i:number){
  switch(i){
    case 0:{
      this.addColor=false;
      this.addLabel=false;
      this.addAttachment=false;
      break
    }
  }

}

onSubmit(){
  this.us={} as UserCalendar;
   Object.assign(this.us, this.newNotes.value);
this.ser.saveNotes(this.us)
}

fun(allSelectedLabels:any){
  this.allSelectedLabels=allSelectedLabels
}

removeLabel(option:string){
  let i=this.allSelectedLabels.indexOf(option)
  this.allSelectedLabels.splice(i,1)
  this.deletedLabel=option
  // this.addLabel=true
  this.changeLabels()
}

ngOnInit(): void {
  // this./\changeMessage("call")
  // this.us.date="add"
  }

getLabels():Observable<any[]>{
return this.allSelectedLabels;
}

getLabelswithout():any[]{
  return this.allSelectedLabels;
  }

 
}
