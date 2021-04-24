/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { chapters } from 'src/app/group8/chapter.model';
import { Group8Service } from 'src/app/group8/group8.service';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.page.html',
  styleUrls: ['./chapter-detail.page.scss'],
})
export class ChapterDetailPage implements OnInit {
chapterDetail: chapters;
  constructor(private rout: ActivatedRoute, private chapterservice: Group8Service) { }

  ngOnInit() {
    this.rout.paramMap.subscribe(paraMap=>{
      const idchapter=paraMap.get('chapterDetailId');
      const idcourse=paraMap.get('courseDetailId');
      const idcategory=paraMap.get('categoryId');
      this.chapterDetail=this.chapterservice.getByIdCategory(idcategory).courses.find(courses=>courses.id==idcourse).chapters.find(chapters=>chapters.id==idchapter);
    });
    console.log(this.chapterDetail);
  }

}
