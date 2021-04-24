import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group8 } from '../group8.model';
import { Group8Service } from '../group8.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
categoryListe: Group8[];

  constructor( private route: ActivatedRoute , private group8service: Group8Service) { }

  ngOnInit() {
    this.categoryListe=this.group8service.getCategoryList();

  }

}
