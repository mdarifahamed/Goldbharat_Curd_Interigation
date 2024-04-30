import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { UpdateContactComponent } from './component/update-contact/update-contact.component';


const routes: Routes = [
  {path: "contactlist", component:ContactListComponent},
  {path: "addcontact", component:AddContactComponent},
  {path: "updatecontact/:id", component:UpdateContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
