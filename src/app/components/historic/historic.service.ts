import { Injectable } from '@angular/core';
import { HistoricStack } from './historic.d';
import { Course } from '../../models/forms';

@Injectable({
  providedIn: 'root',
})
export class HistoricService {
  private stack: HistoricStack[] = [];
  constructor() {}

  getAll() {
    return this.stack;
  }
  push(data: Course, type: "delete" | "update" | "create", mapped?: string) {
    return this.stack.push({ ...data, modified_at: Date.now(), type, mappedUpdate: mapped });
  }
  clean(){
    this.stack = []
  }
}
