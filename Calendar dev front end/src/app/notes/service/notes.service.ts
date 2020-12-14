import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCalendar } from 'src/app/calendar/models/user-calendar';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient){

  }
  saveNotes(userCalendar:UserCalendar){
    this.http.post("http://localhost:8080/cal/save",userCalendar).subscribe(response=>{
      console.log(response)
    })
  
}
}