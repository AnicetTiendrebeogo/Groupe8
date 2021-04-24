import { Inject,Injectable } from '@angular/core';
import { LOCAL_STORAGE,StorageService } from 'ngx-webstorage-service';
import { Note } from './note.model';

// key that is used to access the data in local storageconst
const STORAGE_KEY = 'local_noteliste';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
   anotherNotelist:Note[];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.anotherNotelist = this.takeNote();
   }

public saveNote(note:Note){
      // push new task to array
      this.anotherNotelist.push(note);
// insert updated array to local storage
this.storage.set('notes', this.anotherNotelist);
}
public takeNote(){
  // get array of tasks from local storage
  return this.storage.get(STORAGE_KEY) || [];
}

}
