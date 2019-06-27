import { Component, OnInit, Input } from '@angular/core';
import { NumberService } from '../../services/number.service';
import { ItemElementComponent } from "../item-element/item-element.component";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
 private newNumber: number;

     
  constructor(private numberService: NumberService) {
    this.newNumber = null;
   }

  ngOnInit() {
  }

  private addNumber(): void {
    if(this.newNumber >= 0 || this.newNumber <= 0) {
      this.numberService.addNumber(this.newNumber);
      this.newNumber = undefined;     
    }
                    
  }
  

  
  


}
