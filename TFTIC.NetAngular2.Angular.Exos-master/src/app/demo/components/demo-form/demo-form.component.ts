import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPerson } from 'src/app/models/iperson';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent implements OnInit {

  public registerForm!: FormGroup;

  public get fatherGroup(): FormGroup {
    return this.registerForm.controls['father'] as FormGroup;
  }
  public get motherGroup(): FormGroup {
    return this.registerForm.controls['mother'] as FormGroup;
  }

  public get siblingArray(): FormArray {
    return this.registerForm.controls['siblings'] as FormArray;
  }

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group(
      {
        firstname: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
        lastname: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
        gender: [null, Validators.required],
        birthdate: [null, null],
        siblings: this._formBuilder.array([])
      }
    );
  }

  asFormGroup(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }

  public addSibling() {
    this.siblingArray.push(this._formBuilder.group(
      {
        firstname: [null, Validators.required],
        lastname: [null, Validators.required],
        gender: [null, Validators.required],
        birthdate: [null, null]
      }
    ))
  }

  addParent(parent: string) {
    if (parent != 'father' && parent != 'mother') throw new Error("Bad FormControlName");
    this.registerForm.addControl(parent, this._formBuilder.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      gender: [null, Validators.required],
      birthdate: [null, null]
    }));
  }

  public onSubmit() {
    if (!this.registerForm.valid) throw new Error("Hahaha vous n'avez pas dit le mot magique!")
    let result: IPerson = this.convert(this.registerForm);
    result.siblings = [];
    if (this.registerForm.controls['father'])
      result.father = this.convert(this.fatherGroup);
    if (this.registerForm.controls['mother'])
      result.mother = this.convert(this.motherGroup);
    for (let sib of this.siblingArray.controls) {
      let fg: FormGroup = sib as FormGroup;
      result.siblings?.push(this.convert(fg))
    }
    console.log(result);
  }

  public convert(fg:FormGroup):IPerson{
    return {
      firstname: fg.controls['firstname'].value,
      lastname: fg.controls['lastname'].value,
      birthdate: fg.controls['birthdate'].value,
      gender: fg.controls['gender'].value
    };
  }
}
