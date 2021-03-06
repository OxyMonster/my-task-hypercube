import { Injectable } from '@angular/core';
import { NumberItem } from '../classes/number-item';  

@Injectable({  
  providedIn: 'root'
})
export class NumberService {

  private nextId: number;

  constructor() { 
    let numbers = this.getNumbers();        

    if(numbers.length == 0) {
      this.nextId = 0;
    } else {
      let maxId = numbers[numbers.length - 1].id;
      this.nextId = maxId + 1; 
    }
  }  
  
   addNumber(data: string): void {
    let number = new NumberItem(this.nextId, data);
    let numbers = this.getNumbers();   
    numbers.push(number);
    
    // Save numbers to local Storage
   this.setLocalStorageNumbers(numbers); 
   this.nextId ++;   
  }

   removeNumber(id: number): void {
    let numbers = this.getNumbers();
    numbers = numbers.filter(number => number.id != id);       
    this.setLocalStorageNumbers(numbers);
  }  

   getNumbers(): NumberItem[] {
    let localStoradgeItem = JSON.parse(localStorage.getItem("numbers"));
    return localStoradgeItem == null ? [] : localStoradgeItem.numbers;
  }
  
  splitedNumbers(item: string) {
    let number = item;    
    let splt = /[,;\s]+/;    
    let words = number.split(splt);
    words.forEach(element => { 
      if(+element >= 0 || +element < 0 ) {   
        let number = new NumberItem(this.nextId, element);
        let numbers = this.getNumbers();
        numbers.push(number);
        this.setLocalStorageNumbers(numbers);
        this.nextId ++ - 1;        
      } 
    });
  }

  saveAndAddNumbers(tagsText: string) { 
    let numbers = this.getNumbers();
    numbers.length = 0;
    this.setLocalStorageNumbers(numbers);
    this.splitedNumbers(tagsText);    
  }

   setLocalStorageNumbers(number: NumberItem[]): void {
    localStorage.setItem("numbers", JSON.stringify({numbers: number}));
  }
}
