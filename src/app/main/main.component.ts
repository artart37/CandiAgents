import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicService } from '../services/backendservices/basic.service';
import { rightleft } from '../shared/animations/generalanime';
import { Basic } from '../shared/interfaces/forservices';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [ rightleft ]
})
export class MainComponent implements OnInit {
  basic_data:Observable<Basic[]>;
  item_text_displayed:string = "assistance_service_name";
  forjobseekers:Array<string>;
  leftcardispresent:boolean=true;
  animearr:Array<boolean> = [];
  constructor(private basicservice:BasicService) { }

  ngOnInit(): void {
    //For my chips
    this.basic_data = this.basicservice.basic$
    //For my how it works
    this.forjobseekers = [
      "Connect with hiring assistants",
      "Discuss how the hiring assistant can help you",
      "Get the help you agreed on",
      "Land a job"
    ];
  }
}
