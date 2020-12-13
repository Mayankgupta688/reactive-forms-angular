import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  name = new FormControl('');
  constructor() { }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  updateName() {
    this.name.setValue('Nancy');
  }

  onSubmit() {
    var data = this.profileForm.value;
    console.warn(this.profileForm.value);
    debugger;
  }

  resetForm() {


    // this.profileForm.setValue({
    //   firstName: "Mayank",
    //   lastName: "Gupta"
    // })

    this.profileForm.patchValue({
      firstName: "Mayank"
    })
  }

}
