import { Component, OnInit } from '@angular/core';
import { HistoricStack } from './historic';
import { HistoricService } from './historic.service';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit{
  public historicStack!: HistoricStack[];
  constructor(
    private historicService: HistoricService
  ){}
  ngOnInit(): void {
    this.historicStack = this.historicService.getAll()
  }

  handleClean() {
    this.historicService.clean()
    this.historicStack = this.historicService.getAll()
  }
}
