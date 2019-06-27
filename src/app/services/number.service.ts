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
  
  public addNumber(data: number): void {
    let number = new NumberItem(this.nextId, data);
    let numbers = this.getNumbers();   
    numbers.push(number);
    
    // Add number to local Storage
   this.setLocalStorageNumbers(numbers); 
   this.nextId ++; 
  }

  public removeNumber(id: number): void {
    let numbers = this.getNumbers();
    numbers = numbers.filter(number => number.id != id);       
    this.setLocalStorageNumbers(numbers);
  }  

  public getNumbers(): NumberItem[] {
    let localStoradgeItem = JSON.parse(localStorage.getItem("numbers"));
    return localStoradgeItem == null ? [] : localStoradgeItem.numbers;
  }

  private setLocalStorageNumbers(number: NumberItem[]): void {
    localStorage.setItem("numbers", JSON.stringify({numbers: number}));
  }

  
  

  
  
}
