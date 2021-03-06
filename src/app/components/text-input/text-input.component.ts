import { Component, OnInit } from '@angular/core';
import { NumberService } from '../../services/number.service';
 
@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
 private newNumber;
 
 
 constructor(private numberService: NumberService) {  }
  ngOnInit() {   this.newNumber = null;   }

  private addNumber(): void {
    let textArea = (<HTMLInputElement>document.getElementById("exampleFormControlTextarea1")).value; 
    if(textArea.length > 1){     
      this.numberService.splitedNumbers(this.newNumber);    
    }else if (this.newNumber >= 0 || this.newNumber < 0) {  
      this.numberService.addNumber(this.newNumber);   
    }
    this.newNumber = undefined;          
  }
}
