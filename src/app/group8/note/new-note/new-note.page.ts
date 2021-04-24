import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from 'Nouveau dossier/node_modules_nous/@angular/forms/forms';
import { Group8 } from '../../group8.model';
import { LocalStorageService } from '../local-storage.service';
import { Note } from '../note.model';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.page.html',
  styleUrls: ['./new-note.page.scss'],
})
export class NewNotePage implements OnInit {

  noteform: FormGroup=this.fb.group({
    titleInput:[
      [],
      Validators.required
    ],
    contentInput:[
      [],
      Validators.required
    ]
  });

  note:Note[];

  constructor( private fb: FormBuilder, private localstorageService: LocalStorageService ) { }

  ngOnInit() {
  }

  noteSubmit(){
    console.log(this.noteform.value);
    /* this.note=Object.assign(this.note,this.noteform.value) */
     this.addnote()
     this.noteform.reset()
  }

  addnote(){
    let maNote = this.localstorageService.takeNote();
     if(this.noteform.valid){
       

      let newnote:Note={

        title:this.noteform.get('titleInput').value,
        content:this.noteform.get('contentInput').value,
        date: new Date()
      };
      this.localstorageService.saveNote(newnote);
      console.log(newnote);
    }
    else{
      console.log('Invalid form\n');
    }
  }
  /* //Ajout d'un objet dans la mémoire de l'ordinateur
 localStorage.setItem('monObjet', 'maValeur');
 //Récupération de l'objet
 monObjet:string = localStorage.getItem('monObjet'); */

}
