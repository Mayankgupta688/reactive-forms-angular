import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-bilder',
  templateUrl: './form-bilder.component.html',
  styleUrls: ['./form-bilder.component.css']
})
export class FormBilderComponent {

  constructor(private fb: FormBuilder) { }

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: ['Mayank Gupta Rohini'],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  getData() {
    alert(this.profileForm.value.firstName)
  }

  updateAddress() {
    this.profileForm.patchValue({
      firstName: "askjdkgsadg",
      address: {
        street: "kjsdoDH"
      } 
    })
  }

}
