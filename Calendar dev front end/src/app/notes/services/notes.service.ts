import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCalendar } from 'src/app/calendar/models/user-calendar';
import {BASEURL} from '../../../constant';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }

  saveNotes(userCal:UserCalendar){
  return  this.http.post(BASEURL+"save",userCal,{observe:'response'});
  }

 getAllNotes(account:string,archive:boolean){
return this.http.get(BASEURL+"type/notes/"+account+"/"+archive);
 }
getNotesByTitle(title:string,account:string){
  return this.http.get(BASEURL+"id/"+title+"/notes/"+account)
}


}
