import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { course } from 'src/app/group8/course.model';

import { Group8Service } from 'src/app/group8/group8.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {
courseDetail: course;
  constructor(private rout: ActivatedRoute, private cousrseservice: Group8Service) { }

  ngOnInit() {
    this.rout.paramMap.subscribe(paraMap=>{
      let idcourse=paraMap.get('courseDetailId');
      let id=paraMap.get('categoryId');
      this.courseDetail=this.cousrseservice.getByIdCategory(id).courses.find(courses=>courses.id==idcourse);
    });
    console.log(this.courseDetail);
  }

}
