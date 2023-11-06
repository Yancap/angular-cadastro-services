import { Component, DoCheck } from '@angular/core';
import { FormsService } from './forms.component.service';
import { Course } from '../../models/forms';

@Component({
  selector: 'forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements DoCheck{
  name!: string;
  category!: string;
  courseList!: Course[];
  newName!: string | null;
  newCategory!: string | null;
  isUpdating = false;
  lineThatIsUpdating!: number | undefined;

  constructor(
    private formService: FormsService
  ) {
    this.courseList = this.formService.courseList;
  }
  
  ngDoCheck(): void {
      console.log("Mudo");
      
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
    console.log(this.lineThatIsUpdating);
    
    this.lineThatIsUpdating = line;
    this.isUpdating = !this.isUpdating;
  }

  handleUpdate(line: number){
    this.courseList[line] = {name: this.newName ?? this.courseList[line].name, category: this.newCategory ?? this.courseList[line].category}
    this.newCategory = null;
    this.newName = null;
    this.handleToggleUpdate();
  }
}
