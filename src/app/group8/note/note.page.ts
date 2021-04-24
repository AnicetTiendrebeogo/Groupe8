import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Note } from './note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  noteList:Note[];
  constructor(private noteService:LocalStorageService) { }

  ngOnInit() {
    this.noteList=this.noteService.takeNote();
    console.log(this.noteList)
  }

}
