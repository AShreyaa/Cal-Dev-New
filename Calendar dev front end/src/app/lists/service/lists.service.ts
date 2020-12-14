import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCalendar } from 'src/app/calendar/models/user-calendar';
import {BASEURL} from '../../../constant';
import {ACCOUNT} from '../../../constant';


@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http:HttpClient) { }

acc=ACCOUNT

  saveLists(userCal:UserCalendar){
    return  this.http.post(BASEURL+"save",userCal,{observe:'response'});
    }
  
   getAllLists(archive:boolean){
  return this.http.get(BASEURL+"type/list/"+this.acc+"/"+archive);
   }
  getListByTitle(title:string){
    return this.http.get(BASEURL+"id/"+title+"/list/"+this.acc)
  }
  
  
  
}
