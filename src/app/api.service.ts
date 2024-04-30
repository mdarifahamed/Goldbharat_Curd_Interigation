import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { contact } from './component/contactmodel';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // post methode
  addcontact(data: contact){
    return this.http.post<contact>("http://localhost:3000/users", data)
  }

  // get method
  getcontact(){
    return this.http.get<contact[]>("http://localhost:3000/users")
  }

  // delete
  deletecontact(id:number){
    return this.http.delete<contact>("http://localhost:3000/users/"+id)
  }

  // fetching data on edit
  fetchdata(id:number){
    return this.http.get<contact>("http://localhost:3000/users/"+id)

  }

  // update data 
  updatecontact(data:contact, id:number){
    return this.http.put<contact>("http://localhost:3000/users/"+id, data)

  }
}
