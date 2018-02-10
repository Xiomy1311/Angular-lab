import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GenderizeService } from './genderize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GenderizeService]
})
export class AppComponent {
  title = 'app';
  data :any; 
  constructor(private httpService: GenderizeService) {
  }

  ngOnInit() {
   // this.showPost();
  }

  showPost(form: any) {
    console.log(form.number);
    this.httpService.GetHttp(form.number).subscribe(data =>
    {
      console.log(data);
      this.data = data;
    });
  }

}
