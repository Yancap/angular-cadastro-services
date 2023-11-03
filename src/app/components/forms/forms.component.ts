import { Component, DoCheck } from '@angular/core';
import { FormsService } from './forms.component.service';
import { Course } from '../../models/forms';

@Component({
  selector: 'forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent{
  name!: string;
  category!: string;
  courseList!: Course[];
  newName!: string;
  newCategory!: string;
  isUpdating = false;
  lineThatIsUpdating!: number | undefined;

  constructor(
    private formService: FormsService
  ) {
    this.courseList = this.formService.courseList;
  }
  
  handleAdd() {
    this.courseList.push({name: this.name, category: this.category});
    this.category = "";
    this.name = "";
  }

  handleRemove(index: number) {
    this.courseList.splice(index, 1);
  }

  handleToggleUpdate(line?: number){
    this.lineThatIsUpdating = line;
    this.isUpdating = !this.isUpdating;
  }

  handleUpdate(line: number){
    this.courseList[line] = {name: this.newName, category: this.newCategory}
    this.newCategory = "";
    this.newName = "";
    this.handleToggleUpdate();
  }
}
