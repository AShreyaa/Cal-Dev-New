import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCalendar } from 'src/app/calendar/models/user-calendar';

@Injectable({
  providedIn: 'root'
})
export class LabelsService {

  constructor(private http:HttpClient) { }

  getAllLabels(title:String,type:string,account:string){
    return this.http.get("http://localhost:8080/id/"+title+"/"+type+"/"+account)
  }
  
  createNewLabel(userCal:UserCalendar){
return this.http.post("http://localhost:8080/save",userCal,{observe:'response'})
  }


}
