import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, NgIf, NgFor
  ],
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.scss'
})
export class ProfileFormComponent {

profileForm!:FormGroup
constructor(private fb:FormBuilder){}

ngOnInit():void{
  this.profileForm=this.fb.group({
    firstName:["", Validators.required],
    lastName:["", Validators.required],
    addresses:this.fb.array([this.createAddressFormGroup()])
  });
}
get addresses() {
  return this.profileForm.get('addresses') as FormArray;
}
createAddressFormGroup(): FormGroup {
  return this.fb.group({
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required]
  });
}
addAddress() {
  this.addresses.push(this.createAddressFormGroup());
}
removeAddress(index: number) {
  this.addresses.removeAt(index);
}
onSubmit() {
  if (this.profileForm.valid) {
    console.log('Profile Form Submitted:', this.profileForm.value);
  }
}
}

