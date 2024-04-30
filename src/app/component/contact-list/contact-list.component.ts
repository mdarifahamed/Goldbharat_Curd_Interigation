import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { contact } from '../contactmodel';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  data: undefined| contact[]

  constructor(private api:ApiService){}

  ngOnInit(): void {
      this.getcontact();
  }

  getcontact(){
    this.api.getcontact().subscribe(
      (res) => {
        this.data = res;
        console.log('res', res);
      },
      (error) => {
        console.error('Error fetching contact data:', error);
        // You can handle the error here, such as displaying a message to the user
      }
    );
  }

 // delete
  // delete(id:number){
  //   this.api.deletecontact(id).subscribe((res =>{
  //     alert("contact deleted successfuly")
  //     this.getcontact();

  //   }))
  // }

  delete(id:any){
    this.api.deletecontact(id).subscribe((res:any)=>{
      alert("contact deleted successfuly")
      this.getcontact();
    })
  }




}
