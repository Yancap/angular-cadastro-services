import { Injectable } from '@angular/core';
import { Course } from '../../models/forms';
import { HistoricService } from './../historic/historic.service';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  public courseList: Course[] = [{ name: 'Angular', category: 'front-end' }];

  constructor(private historicService: HistoricService) {}

  public add(data: Course) {
    this.courseList.push(data);
    this.historicService.push(data, "create");
  }
  public update(data: Course, line: number) {
    const thisCourse = this.courseList[line];
    let mapped = undefined;
    if(thisCourse.name !== data.name) {
      mapped = "name;"
    }
    if(thisCourse.category !== data.category) {
      mapped += "category;"
    }
    this.courseList[line] = data;
    this.historicService.push(data, "update", mapped);
  }
  public delete(line: number) {
    const data = this.courseList.splice(line, 1);
    this.historicService.push(data[0], "delete");
  }
}
