import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,MatInputModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })

    login(){
      if(this.loginForm.valid){
          console.log("Valid form")
      }
      else{
          console.log('Invalid form')
      }
    }
}
