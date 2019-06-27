import {Component} from '@angular/core';
import { NumberService } from '../../services/number.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { createInput } from '@angular/compiler/src/core';


@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.html',
  styleUrls: ['./modal-basic.css']   
})
export class NgbdModalBasic {
  closeResult: string;
  
  
  constructor(private modalService: NgbModal, private  numberService: NumberService) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  numberList = this.numberService.getNumbers();

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

 private saveNumberToLocalStoradge() {
  // this.numberService.saveNumberToLocalStorage(); 
  }       
            
  private removeNumberFromLocalStorage(id) {
   this.numberService.removeNumber(id);
   
            
  }
}