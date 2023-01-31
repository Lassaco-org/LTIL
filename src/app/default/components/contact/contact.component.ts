import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  userForm: any = FormGroup;
  loading: boolean = false;
  alertMessage: string = '';
  alertColor: string = '';
  isAlert: boolean = false;
  isFormSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    // User form
    this.userForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  // Submit message
  submitMessage() {
    // Start loading
    this.loading = true;

    // Set submitted to true
    this.isFormSubmitted = true;

    // If Form is invalid
    if (this.userForm.invalid) {
      this.loading = false;

      return;
    }

    console.log(this.userForm.value);
    
    
    // await this.firebaseService.signinUser(payload)
    //   .then(res => {
    //     console.log(res);
        

    //     if (this.firebaseService.isLogggedIn === true) {
    //       this.isSignedin = true
    //       this.showAlert('User logged in successfully', 'success')
    //       // Navigate to Dashboard
    //       setTimeout(() => {
    //         // Route user
    //           this.router.navigate(['/admin'])
    //       }, 3000);
    //     }

    //   }).catch(error => {
    //     console.log(error);
    //     this.loading = false
        
    //   })
  }

}
