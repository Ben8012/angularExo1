

export interface IPerson {
    firstname : string;
    lastname : string;
    gender : Gender;
    birthdate? : Date;
    father? : IPerson;
    mother? : IPerson;
    siblings? : IPerson[];
}

export enum Gender{ Male, Female, Other};

export enum City{ Bruxelles, Gand, Anvers, Brugge, Hasselt, Namur, Liège, Charleroi, Mons, Arlon, Wavre};

export interface IPersonAdmin {
    firstname : string;
    lastname : string;
    email : string;
    passwd : string;
    birthdate? : Date;
    gender : Gender;
    searchingGender : Gender;
    hairColor: string;
    eyesColor :string;
    weight: number;
    height : number;
    city : City;
    description :string;
    nickName : string;
    food? : Ifood[];
    trip? : Itrip[];
    party? : Iparty[];
    movie? : Imovie[];
   
}

export interface IVilles{
    name: string;
}

export interface ICountry{
    name: string;
}

export interface Ifood{
    food: string;
    drink: string;
}


export interface Itrip{
    country:string;
    date: Date;
}

export interface Iparty{
    Nom: string;
    Ville:  string;
    Date: Date;
}

export interface Imovie{
    Titre: string;
}
