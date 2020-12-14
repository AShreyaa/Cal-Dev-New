import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserCalendar } from 'src/app/calendar/models/user-calendar';
import { LabelService } from '../../services/label.service';
import {map, startWith} from 'rxjs/operators';
import { CreateNotesComponent } from 'src/app/notes/components/create-notes/create-notes.component';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  @Output() allSelectedLabels = new EventEmitter<any>();
  @Input() deletedLabel:string
create:boolean
labels=[]
account="Shr"
  selectedLabels=[]
  check=[]
  res: UserCalendar;
  filteredOptions: Observable<string[]>;
  newLabel=new FormControl();
addNewLabel=new FormControl();



  constructor( private labelSer:LabelService, private cre:CreateNotesComponent) {
    this.fetchLabels()
   }

  async fetchLabels(){
    // let response=await this.labelSer.getModelTags("model",this.account).toPromise()
this.res={} as UserCalendar
// this.res=Object.assign(this.res,response)
this.labels.push("tag1")
this.labels.push("tag2")
this.labels.push("tag3")

  // this.res[0].tags.forEach(tag=>{
  //   this.labels.push(tag)
  //   this.check.push(false)
  // })
  }
  
 async createLabel(){
   this.create=false
    this.res[0].tags.push(this.newLabel.value)
  await  this.labelSer.createNewLabel(this.res[0]).toPromise()
    this.addLabel(this.newLabel.value,true)
    this.labels.push(this.newLabel.value)
    this.check.push(true)
this.newLabel.setValue("")
  }

  addLabel(tag:string,add:boolean){
    console.log("add")
    this.cre.labelsSelected.subscribe(m=>{
      console.log(m)
    })
    if(add)
    this.selectedLabels.push(tag)
    else{
      let index=this.selectedLabels.indexOf(tag)
      this.selectedLabels.splice(index,1)
      this.check[this.labels.indexOf(tag)]=false
    }
    this.allSelectedLabels.emit(this.selectedLabels)
  }



  ngOnInit(): void {

    // this.labelSer.tryCon().subscribe(res=>{
    //   console.log(res)
    // })
this.labelSer.trysave({"a":"this is a from ang","t":"this is t from ang"}).subscribe(
  res=>{
    console.log(res)
  }
)
    this.cre.getLabels().subscribe(res=>{
      console.log(res)
    })
    
    console.log(this.cre.getLabelswithout())
    console.log(this.labels)
    console.log(this.deletedLabel)
    this.filteredOptions = this.newLabel.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    
    }
    
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
     
     let filteredOptions=[]
     if(!filterValue){
      return this.labels
     }

    
      filteredOptions= this.labels.filter(option => option.toLowerCase().includes(filterValue));
      if(!filteredOptions.length)
      this.create=true
      else
      this.create=false
            return filteredOptions
    }


}
 