import {  HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCalendar } from 'src/app/calendar/models/user-calendar';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  
  constructor(private http:HttpClient) { }

  getModelTags(type:string,account:string){
   
    
    return  this.http.get("http://localhost:8080/cal/type/"+type+"/"+account)

}
createNewLabel(cal:UserCalendar){
  console.log(cal)
  return this.http.post("http://localhost:8080/cal/save",cal,{observe: 'response'})
   
}
try(){
  return this.http.get("https://stormy-dusk-31596.herokuapp.com/")
}
trysave(as:any){
  return this.http.post("https://tranquil-hollows-26783.herokuapp.com/check","test")
}
// tryCon(){
//   return this.http.get("https://tranquil-hollows-26783.herokuapp.com/account/shr")
// }
}