export interface Location {
    country:string,
    city:Array<string>,
}
export interface Employmenttype{
    employment:string,
    profile_specific:boolean
}

export interface Basic {
    assistance_service_name?:string
    paymenttype?:string,
    industry?:Array<string>,
    employment_type?:Array<Employmenttype>,
    employment_mode?:Array<string>, 
    experience_level?:Array<string>,
    visa_sponsorship?:Array<boolean>,
    location?:Array<Location>,
    languages?:Array<string>,
}