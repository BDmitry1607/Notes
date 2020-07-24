import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesPageComponent } from './notes-page/notes-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from "@ngrx/store";
import { noteReducer } from "./state/note.reducer";
import { EffectsModule, Actions } from "@ngrx/effects";
import { NoteEffect } from "./state/note.effects";



@NgModule({
  declarations: [
    NotesPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: NotesPageComponent }]),
    StoreModule.forFeature("notes", noteReducer),
    EffectsModule.forFeature([NoteEffect])
  ]
})
export class MainpageModule { }
