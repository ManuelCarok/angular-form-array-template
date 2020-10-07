import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  form: FormGroup;
  classForm: string[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      published: true,
      name: new FormControl('', [Validators.required]),
      pass: new FormControl(''),
      credentials: this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }

  addCreds() {
    const creds = this.form.controls.credentials as FormArray;
    creds.push(this.fb.group({
      username: this.form.value.name,
      password: this.form.value.pass,
    }));
  }

  get formInfoTemplate() {
    return this.form.get('credentials') as FormArray;
  }

  viewForm(controls: any){
    const values = controls.map(m => ({ username: m.controls.username.value, password: m.controls.password.value }))//.forEach(control => console.log(control))
    console.log(values)
  }

  addClass(index: number) {
    this.classForm[index] = 'hola';
  }
}
