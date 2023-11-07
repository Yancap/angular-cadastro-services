import { Component, DoCheck, OnInit } from '@angular/core';
import { FormsService } from './forms.component.service';
import { Course } from '../../models/forms';
import { HistoricService } from '../historic/historic.service';

@Component({
  selector: 'forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit, DoCheck{
  name!: string;
  category!: string;
  courseList!: Course[];
  newName!: string | null;
  newCategory!: string | null;
  isUpdating = false;
  lineThatIsUpdating!: number | undefined;

  constructor(
    private formService: FormsService
  ) { }
  ngOnInit(): void {
    this.courseList = this.formService.courseList;
  }
  ngDoCheck(): void { }

  handleAdd() {
    const data = {name: this.name, category: this.category}
    this.formService.add(data)
    this.category = "";
    this.name = "";
  }

  handleRemove(index: number) {
    this.formService.delete(index)
  }

  handleToggleUpdate(line?: number){
    this.lineThatIsUpdating = line;
    this.isUpdating = !this.isUpdating;
  }

  handleUpdate(line: number){
    if(this.newName || this.newCategory) {
      const data = {
        name: this.newName ?? this.courseList[line].name, 
        category: this.newCategory ?? this.courseList[line].category
      }
      
      this.formService.update(data, line)
    }
    
    this.newCategory = null;
    this.newName = null;
    this.handleToggleUpdate();
  }
}
