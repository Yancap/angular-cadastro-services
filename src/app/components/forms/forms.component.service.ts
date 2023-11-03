import { Injectable } from '@angular/core';
import { Course } from '../../models/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  public courseList: Course[] = [{ name: 'Angular', category: "front-end" }];
  public add(data: Course){
    this.courseList.push(data)
  }
}
