import { Component } from '@angular/core';
import { NumberService } from './services/number.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-task :)';
  constructor(private numberService: NumberService) {  }

}
