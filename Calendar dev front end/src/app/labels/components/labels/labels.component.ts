import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LabelsService } from '../../services/labels.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { CreateNotesComponent } from 'src/app/notes/components/create-notes/create-notes.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData{
  labelsTagged:any[]
  // selectedLabels:any[]

}
@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {
  filteredOptions: Observable<string[]>;



  constructor(private labelSer:LabelsService,@Inject(MAT_DIALOG_DATA)public data: DialogData) { }

  // @Input() labelsTagged:any=[]
  // @Output() labelsEdited: EventEmitter<any> = new EventEmitter();
  title="Tags List";
  type="model";
  account="ShrModel";
  userCalLabels:any
  allLabels=[]
  checkLabels=[]
  createLabel:boolean
  newLabel=new FormControl('')

async fetchAllLabels(){
  // let a;
  // a=this.userCalLabels;
  this.userCalLabels=await this.labelSer.getAllLabels(this.title,this.type,this.account).toPromise();
  this.userCalLabels.tags.forEach(tag => {
    this.allLabels.push(tag)
    this.checkLabels.push(false)
  });
  
  if(this.data.labelsTagged.length)
  this.data.labelsTagged.forEach(element => {
    // this.selectedLabels.push(element)
    this.checkLabels[this.allLabels.indexOf(element)]=true
  });
}

editLabels(label:string,add:boolean,create:boolean){
  if(add){
  this.data.labelsTagged.push(label)
  if(create)
  this.checkLabels.push(true)
  }
  else{
    console.log(label)
    let i=this.data.labelsTagged.indexOf(label)
    console.log(i)
    if(i>=0)
    this.data.labelsTagged.splice(i,1)
    this.checkLabels[this.allLabels.indexOf(label)]=false
  }
  // this.labelsEdited.emit(this.selectedLabels)
    }
  
    createNewLabel(){
this.userCalLabels.tags.push(this.newLabel.value)
this.createLabel=false
      this.labelSer.createNewLabel(this.userCalLabels).subscribe(res=>{
        if(res.status==200){
          this.allLabels.push(this.newLabel.value)
          this.editLabels(this.newLabel.value,true,true)
          
        }
        this.newLabel.setValue("")
      })
      
    }

 ngOnInit(): void {
this.fetchAllLabels()
this.filteredOptions = this.newLabel.valueChanges.pipe(
  startWith(''),
  map(value => this._filter(value))
);
// this.fun()
}

private _filter(value: string): string[] {

 
  const filterValue = value.toLowerCase();
let filterLabels= this.allLabels.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
if(!value){
  this.createLabel=false
  return this.allLabels
}
if(!filterLabels.length){
  this.createLabel=true
}
else{
  this.createLabel=false
  return filterLabels
}

}
//   fun(){
// this.cre.labelDeleted.subscribe(res=>{
//   if(res)
//  this.editLabels(res,false,false)
// })
//   }

}
