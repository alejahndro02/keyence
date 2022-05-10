import { Component } from '@angular/core';
import { AddItemService } from '../../../services/add-item.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent{
  get historial(){
    return this.addItemService.historial
  }

  constructor(private addItemService:AddItemService) { }

}
