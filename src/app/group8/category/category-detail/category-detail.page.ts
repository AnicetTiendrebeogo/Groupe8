import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group8 } from '../../group8.model';
import { Group8Service } from '../../group8.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit {
categoryDetail: Group8;
  constructor(private route: ActivatedRoute, private categoryservice: Group8Service) { }

  ngOnInit() {
     this.route.paramMap.subscribe(paraMap=>{
      const id= paraMap.get('categoryId');
      this.categoryDetail=this.categoryservice.getByIdCategory(id); //recuperer la recette en question
    });
    console.log(this.categoryDetail);
  }

}
