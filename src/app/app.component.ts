import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GenderizeService } from './genderize.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GenderizeService]
  
})
export class AppComponent {
  title = 'app';
  data :any; 
  formName:FormGroup  ;
  constructor(private httpService: GenderizeService) {
  }
  
  showPost(form: any) {
    console.log(form.name);
    this.httpService.GetHttp(form.nickName).subscribe(data =>
    {
      //console.log(data);
      this.data = data;
    });
  }

}
