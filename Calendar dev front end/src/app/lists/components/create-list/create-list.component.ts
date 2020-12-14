import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LabelsComponent } from 'src/app/labels/components/labels/labels.component';
import { ListsService } from '../../service/lists.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {
  openExpPanel=false;

  constructor(private formBuilder:FormBuilder,private dailog:MatDialog,private listSer:ListsService) { }

  selectedLabels:any=[]

newList=this.formBuilder.group({
  title:this.formBuilder.group({
    title:[''],
    type:['list'],
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
    this.formBuilder.control('')
  ])
  })

  get tags() {
    return this.newList.get('tags') as FormArray;
  }
  addtags(lables:[]) {
    lables.forEach(element => {
      this.tags.push(this.formBuilder.control(element));
      
    });
    
  }

  get taskOrList() {
    return this.newList.get('taskOrList') as FormArray;
  }
  addTaskOrList() {
    this.taskOrList.push(this.formBuilder.control(''));
  }

  // check(){
  //   console.log(this.newList.value.title)
  // }


  onSubmit(){
    if(!(this.newList.value.title && this.newList.value.description)){
      alert("title n des cant be empty")
      return;
    }
    if(this.newList.value.description.split(" ").length>21){
      alert("des cant be more than 20")
      return
    }
    this.addtags(this.selectedLabels)
    console.log(this.newList.value.tags)
    console.log(this.newList.value)
this.listSer.saveLists(this.newList.value).subscribe(res=>{
  console.log(res)
})
// this.resetForm();
this.closeNewList();
  }

resetForm(){
  this.newList.reset({title:{type:"list",account:"shr"},archive:"false"})
  this.selectedLabels=[]
  
}

 closeNewList(){
   this.resetForm()
   this.openExpPanel=false
  }

  expOpened(){
    this.openExpPanel=true
  }
  removeLabel(option){
    let i=this.selectedLabels.indexOf(option)
    this.selectedLabels.splice(option,1)
    console.log(this.selectedLabels)
  }
  
  openDialogLabel(){
    const dialogRef = this.dailog.open(LabelsComponent,{
      data:{labelsTagged:this.selectedLabels}})

      dialogRef.afterClosed().subscribe(result => {
      console.log(this.selectedLabels)
        
      });
    

  }


  

  ngOnInit(): void {
  }

}
