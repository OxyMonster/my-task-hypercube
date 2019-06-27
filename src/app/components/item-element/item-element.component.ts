import { Component, OnInit, Input } from '@angular/core';
import { NumberItem  } from '../../classes/number-item';
import { NumberService } from '../../services/number.service';


@Component({
  selector: 'app-item-element',
  templateUrl: './item-element.component.html',
  styleUrls: ['./item-element.component.css']
})
export class ItemElementComponent implements OnInit {

  private number: NumberItem;
  public numberList = [];

  constructor(private  numberService: NumberService) { }

  ngOnInit() {
  }

  private removeNumber(element): void {  
  this.numberService.removeNumber(element);         
  }



  

  

  
}
