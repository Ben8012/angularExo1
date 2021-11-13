import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { City, Gender, ICountry, Ifood, Imovie, Iparty, IPersonAdmin, Itrip, IVilles } from 'src/app/models/iperson';


@Component({
  selector: 'app-exo-formulaire',
  templateUrl: './exo-formulaire.component.html',
  styleUrls: ['./exo-formulaire.component.scss']
})
export class ExoFormulaireComponent implements OnInit {

  
  public adminRegister!: FormGroup;

  public get foods(): FormArray {
    return this.adminRegister.controls['foods'] as FormArray;
  }

  public get trips(): FormArray {
    return this.adminRegister.controls['trips'] as FormArray;
  }

  public get partys(): FormArray {
    return this.adminRegister.controls['partys'] as FormArray;
  }

  public get movies(): FormArray {
    return this.adminRegister.controls['movies'] as FormArray;
  }

  public Citys  : IVilles[] =   [{name :'Bruxelles'} , {name :'Gand'}, {name :'Anvers'}, {name :'Brugge'}, {name :'Hasselt'}, {name :'Namur'}, {name :'Liège'}, {name :'Charleroi'}, {name :'Mons'}, {name :'Arlon'}, {name :'Wavre'}];

  public Countrys  : ICountry[] =   [{name :'Belgique'} , {name :'France'}, {name :'Bénin'}, {name :'Mali'}, {name :'Congo'}, {name :'Costa-Rica'}, {name :'Maroc'}, {name :'Thaillande'}, {name :'Inodnesie'}, {name :'Afrique du Sud'}, {name :'Egypte'}];

  constructor(private _formBuilder: FormBuilder) { }

  

  ngOnInit(): void {
   
    this.adminRegister = this._formBuilder.group(
      {
        firstname: ["benjamin", [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
        lastname: ["sterckx", [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
        email :["ben@mail.com",[Validators.required,Validators.email]],
        passwd: ["Test12345", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/)]],
        passwdConfirm: ["Test12345", [Validators.required]],
        birthdate: [new Date(2000,10,12), [Validators.required]],
        gender :[Gender.Male,[Validators.required]],
        searchingGender : [Gender.Female,[Validators.required]],
        hairColor :  [null,[Validators.pattern("")]],
        eyesColor : [null,null],
        weight:  [50,[Validators.min(40),Validators.max(230)]],
        height: [140,[Validators.min(120),Validators.max(220)]],
        city: [null, null],
        description: [null, Validators.maxLength(255)],
        nickName:  ['Ben',[Validators.required]],
        foods: this._formBuilder.array([]),
        trips: this._formBuilder.array([]),      
        partys: this._formBuilder.array([]),     
        movies: this._formBuilder.array([])
      }, { validators: [this.passwordMatchingValidatior,this.birthDateMatchValidator] }
    )

  }

  asFormGroup(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }



  public addFood() {
    this.foods.push(this._formBuilder.group(
      {
        food: [null,[Validators.minLength(3),Validators.maxLength(16)]],
        drink: [null, [Validators.minLength(3),Validators.maxLength(16)]]
      }
    ))
  }
   

  public addTrip() {
    this.trips.push(this._formBuilder.group(
      {
        country: [null,[Validators.minLength(3),Validators.maxLength(16)]],
        date: [null, [Validators.minLength(3),Validators.maxLength(16)]]
      }
    ))
  }

  public addParty() {
    this.partys.push(this._formBuilder.group(
      {
        Nom:[null,[Validators.minLength(3),Validators.maxLength(16)]],
        Ville: [null,[Validators.minLength(3),Validators.maxLength(16)]],
        Date: [null, [Validators.minLength(3),Validators.maxLength(16)]]
      }
    ))
  }

  public addMovie() {
    this.movies.push(this._formBuilder.group(
      {
        Titre: [null,[Validators.minLength(3),Validators.maxLength(16)]]
      }
    ))
  }


  public convert(fg:FormGroup):IPersonAdmin{
    return {
      firstname : fg.controls['firstname'].value,
      lastname : fg.controls['lastname'].value,
      email :  fg.controls['email'].value,
      passwd :  fg.controls['passwd'].value,
      birthdate :  fg.controls['birthdate'].value,
      gender : fg.controls['gender'].value,
      searchingGender :  fg.controls['searchingGender'].value,
      hairColor:  fg.controls['hairColor'].value,
      eyesColor : fg.controls['eyesColor'].value,
      weight:  fg.controls['weight'].value,
      height :  fg.controls['height'].value,
      city :  fg.controls['city'].value,
      description : fg.controls['description'].value,
      nickName :  fg.controls['nickName'].value,
    };
  }

  public convertFood(fg:FormGroup):Ifood{
    return {
      food: fg.controls['food'].value,
      drink: fg.controls['drink'].value,
    };
  }

  public convertTrip(fg:FormGroup):Itrip{
    return {
      country: fg.controls['country'].value,
      date: fg.controls['date'].value,
    };
  }

  public convertParty(fg:FormGroup):Iparty{
    return {
      Nom: fg.controls['Nom'].value,
      Ville: fg.controls['Ville'].value,
      Date: fg.controls['Date'].value,
    };
  }

  public convertMovie(fg:FormGroup):Imovie{
    return {
      Titre: fg.controls['Titre'].value,
     
    };
  }


  public onSubmit() {
    if (!this.adminRegister.valid ) throw new Error("Les formulaires ne sont pas valident!")
    let result: IPersonAdmin = this.convert(this.adminRegister);

    result.food = [];
    result.trip = [];
    result.party = [];
    result.movie = [];

   
    for (let f of this.foods.controls) {
      let fg: FormGroup = f as FormGroup;
      result.food?.push(this.convertFood(fg))
    }

    for (let t of this.trips.controls) {
      let fg: FormGroup = t as FormGroup;
      result.trip?.push(this.convertTrip(fg))
    }

    for (let p of this.partys.controls) {
      let fg: FormGroup = p as FormGroup;
      result.party?.push(this.convertParty(fg))
    }

    for (let m of this.movies.controls) {
      let fg: FormGroup = m as FormGroup;
      result.movie?.push(this.convertMovie(fg))
    }

    console.log(result);
  }

  passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('passwd');
    const confirmPassword = control.get('passwdConfirm');
  
    return password?.value === confirmPassword?.value ? null : { notmatched: true };
  };

  birthDateMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const birthdate = control.get('birthdate');
    var b = new Date(birthdate?.value);
    return ((new Date()).getFullYear() - b.getFullYear()) >= 18 ? null : { notmatched: true };
  };

}


