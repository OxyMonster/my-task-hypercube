import { Component, OnInit } from '@angular/core';
import { NumberService } from '../../services/number.service';


@Component({
  selector: 'app-item-element',
  templateUrl: './item-element.component.html',
  styleUrls: ['./item-element.component.css']
})
export class ItemElementComponent implements OnInit {
  
  constructor(private  numberService: NumberService) { }

  ngOnInit() { }

  private removeNumber(element): void {  
  this.numberService.removeNumber(element);         
  }



  

  

  
}
