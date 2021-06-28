import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Basic, Employmenttype, Location } from '../../shared/interfaces/forservices';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor() { }
  location:Location[]=[
    {country:"All", city:["All"]},
    {country:"Armenia", city:["Yerevan", "Gyumri"]},
    {country:"Belarus", city:["Minsk", "Gordno"]},
    {country:"Russia", city:["Moscow", "Saint Petersburg"]},
    {country:"England", city:["London", "Manchester"]},
    {country:"Georgia", city:["Tbilisi", "Batumi"]},
    {country:"Italy", city:["Rome", "Milan"]},
    {country:"France", city:["Paris", "Marseille"]},
    {country:"Germany", city:["Berlin", "Hamburg"]},
    {country:"Mexico", city:["Mexico City", "Guadalajara"]}
  ];
  
  languages:Array<string>=["Armenian", "Belarusian", "Russian", "English", "Georgian", "Italian", "French", "German", "Danish", "Dutch"]
  
  employment_type:Employmenttype[]=[
    {employment: "All", profile_specific:true},
    {employment: "Full-time", profile_specific:true},
    {employment: "Part-time", profile_specific:true},
    {employment: "Contract", profile_specific:true},
    {employment: "Freelance", profile_specific:true},
    {employment: "Internship", profile_specific:true},
    {employment: "Apprenticeship", profile_specific:true},
    {employment: "Seasonal", profile_specific:true},
    {employment: "Self-employed", profile_specific:false},
    {employment: "Other", profile_specific:true}
  ]
  
  basic:Basic[] = [
    {assistance_service_name:"Getting you hired", paymenttype:"Success fee", industry:["All","Accounting","Administrative Assistant","Arts and Design","Business Development","Community and Social Services","Consulting","Customer Service","Education","Engineering","Entrepreneurship","Finance","Healthcare Service","Human Resources","Information Technology","Legal","Marketing","Media and Communications","Military and Protective Services","Operations","Product Management","Program and Project Management","Purchasing","Quality Assurance","Real Estate","Research","Retail Associate","Sales","Support"], employment_type:this.employment_type, employment_mode: ["All", "Remote", "Partially remote", "Onsite work"], visa_sponsorship:[true, false], experience_level:["All", "Internship", "Entry level", "Associate", "Mid-Senior level", "Director"], location: this.location, languages: this.languages},
    {assistance_service_name:"CV writing", paymenttype:"Fixed price", industry:["All","Accounting","Administrative Assistant","Arts and Design","Business Development","Community and Social Services","Consulting","Customer Service","Education","Engineering","Entrepreneurship","Finance","Healthcare Service","Human Resources","Information Technology","Legal","Marketing","Media and Communications","Military and Protective Services","Operations","Product Management","Program and Project Management","Purchasing","Quality Assurance","Real Estate","Research","Retail Associate","Sales","Support"], employment_type:this.employment_type, employment_mode: ["All", "Remote", "Partially remote", "Onsite work"], visa_sponsorship:[true, false], experience_level:["All", "Internship", "Entry level", "Associate", "Mid-Senior level", "Director"], location: this.location, languages: this.languages},
    {assistance_service_name:"Cover letter writing", paymenttype:"Fixed price", industry:["All","Accounting","Administrative Assistant","Arts and Design","Business Development","Community and Social Services","Consulting","Customer Service","Education","Engineering","Entrepreneurship","Finance","Healthcare Service","Human Resources","Information Technology","Legal","Marketing","Media and Communications","Military and Protective Services","Operations","Product Management","Program and Project Management","Purchasing","Quality Assurance","Real Estate","Research","Retail Associate","Sales","Support"], employment_type:this.employment_type, employment_mode: ["All", "Remote", "Partially remote", "Onsite work"], visa_sponsorship:[true, false], experience_level:["All", "Internship", "Entry level", "Associate", "Mid-Senior level", "Director"], location: this.location, languages: this.languages},
    {assistance_service_name:"LinkedIn profile writing", paymenttype:"Fixed price", industry:["All","Accounting","Administrative Assistant","Arts and Design","Business Development","Community and Social Services","Consulting","Customer Service","Education","Engineering","Entrepreneurship","Finance","Healthcare Service","Human Resources","Information Technology","Legal","Marketing","Media and Communications","Military and Protective Services","Operations","Product Management","Program and Project Management","Purchasing","Quality Assurance","Real Estate","Research","Retail Associate","Sales","Support"], employment_type:this.employment_type, employment_mode: ["All", "Remote", "Partially remote", "Onsite work"], visa_sponsorship:[true, false], experience_level:["All", "Internship", "Entry level", "Associate", "Mid-Senior level", "Director"], location: this.location,languages: this.languages},
    {assistance_service_name:"Submitting job applications", paymenttype:"Fixed price", industry:["All","Accounting","Administrative Assistant","Arts and Design","Business Development","Community and Social Services","Consulting","Customer Service","Education","Engineering","Entrepreneurship","Finance","Healthcare Service","Human Resources","Information Technology","Legal","Marketing","Media and Communications","Military and Protective Services","Operations","Product Management","Program and Project Management","Purchasing","Quality Assurance","Real Estate","Research","Retail Associate","Sales","Support"], employment_type:this.employment_type, employment_mode: ["All", "Remote", "Partially remote", "Onsite work"], visa_sponsorship:[true, false], experience_level:["All", "Internship", "Entry level", "Associate", "Mid-Senior level", "Director"], location: this.location, languages: this.languages},
    {assistance_service_name:"Custom e-mail creation", paymenttype:"Fixed price", industry:["All","Accounting","Administrative Assistant","Arts and Design","Business Development","Community and Social Services","Consulting","Customer Service","Education","Engineering","Entrepreneurship","Finance","Healthcare Service","Human Resources","Information Technology","Legal","Marketing","Media and Communications","Military and Protective Services","Operations","Product Management","Program and Project Management","Purchasing","Quality Assurance","Real Estate","Research","Retail Associate","Sales","Support"], employment_type:this.employment_type, employment_mode:["All", "Remote", "Partially remote", "Onsite work"], visa_sponsorship:[true, false], experience_level:["All", "Internship", "Entry level", "Associate", "Mid-Senior level", "Director"], location: this.location, languages: this.languages},
    {assistance_service_name:"Interview training", paymenttype:"Fixed price", industry:["All","Accounting","Administrative Assistant","Arts and Design","Business Development","Community and Social Services","Consulting","Customer Service","Education","Engineering","Entrepreneurship","Finance","Healthcare Service","Human Resources","Information Technology","Legal","Marketing","Media and Communications","Military and Protective Services","Operations","Product Management","Program and Project Management","Purchasing","Quality Assurance","Real Estate","Research","Retail Associate","Sales","Support"], employment_type:this.employment_type, employment_mode: ["All", "Remote", "Partially remote", "Onsite work"], visa_sponsorship:[true, false], experience_level:["All", "Internship", "Entry level", "Associate", "Mid-Senior level", "Director"], location: this.location, languages: this.languages},
    {assistance_service_name:"Job search consulting", paymenttype:"Fixed price", industry:["All","Accounting","Administrative Assistant","Arts and Design","Business Development","Community and Social Services","Consulting","Customer Service","Education","Engineering","Entrepreneurship","Finance","Healthcare Service","Human Resources","Information Technology","Legal","Marketing","Media and Communications","Military and Protective Services","Operations","Product Management","Program and Project Management","Purchasing","Quality Assurance","Real Estate","Research","Retail Associate","Sales","Support"], employment_type:this.employment_type, employment_mode: ["All", "Remote", "Partially remote", "Onsite work"], visa_sponsorship:[true, false], experience_level:["All", "Internship", "Entry level", "Associate", "Mid-Senior level", "Director"], location: this.location, languages: this.languages},
    {assistance_service_name:"Immigration consulting", paymenttype:"Fixed price", industry:["All","Accounting","Administrative Assistant","Arts and Design","Business Development","Community and Social Services","Consulting","Customer Service","Education","Engineering","Entrepreneurship","Finance","Healthcare Service","Human Resources","Information Technology","Legal","Marketing","Media and Communications","Military and Protective Services","Operations","Product Management","Program and Project Management","Purchasing","Quality Assurance","Real Estate","Research","Retail Associate","Sales","Support"], employment_type:this.employment_type, employment_mode: ["All", "Remote", "Partially remote", "Onsite work"], visa_sponsorship:[true, false], experience_level:["All", "Internship", "Entry level", "Associate", "Mid-Senior level", "Director"], location: this.location,languages: this.languages},
    {assistance_service_name:"Portfolio building", paymenttype:"Fixed price", industry:["All","Accounting","Administrative Assistant","Arts and Design","Business Development","Community and Social Services","Consulting","Customer Service","Education","Engineering","Entrepreneurship","Finance","Healthcare Service","Human Resources","Information Technology","Legal","Marketing","Media and Communications","Military and Protective Services","Operations","Product Management","Program and Project Management","Purchasing","Quality Assurance","Real Estate","Research","Retail Associate","Sales","Support"], employment_type:this.employment_type, employment_mode: ["All", "Remote", "Partially remote", "Onsite work"], visa_sponsorship:[true, false], experience_level:["All", "Internship", "Entry level", "Associate", "Mid-Senior level", "Director"], location: this.location, languages: this.languages},
  ];
  
basic$:Observable<Basic[]> = new Observable(subscriber=>{
  try {
    subscriber.next(this.basic)
    subscriber.complete()
  } catch (error) {
    subscriber.error("Something went wrong" + error)
  }
})



}