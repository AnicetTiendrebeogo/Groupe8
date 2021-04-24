import { Component } from '@angular/core';
import { LocalStorageService } from './group8/note/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private localStorageService: LocalStorageService) {}
  ngOnInit(): void {
    const newNote = 'new todo';
   // this.localStorageService.storeOnLocalStorage(newNote);
}
}
