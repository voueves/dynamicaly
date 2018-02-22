import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonEditComponent} from "./person-edit/person-edit.component";
import {PeopleListComponent} from "./people-list/people-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import {PeopleService} from "./people.service";

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [PeopleListComponent, PersonEditComponent],
  providers: [PeopleService],
  exports: [PeopleListComponent, PersonEditComponent]
})
export class PeopleModule { }
